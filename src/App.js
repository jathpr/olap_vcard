import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Bio from './Components/Pages/Bio'
import News from './Components/Pages/News'
import Music from './Components/Pages/Music'
import Contacts from './Components/Pages/Contacts'
import Projects from './Components/Pages/Projects'
import Header from './Components/Header'
// import Footer from './Components/Footer';
import { fetchData } from './Components/Utils/FetchData'
import './App.css'
import Article from './Components/Pages/Article'
import Player from './Components/Player/AudioPlayer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cHeader: {}, // c is for Content
      cHome: null, // nul for not drawing, {} for drowing from local data
      cContacts: null,
      cBio: null,
      cConcert: null,
      cFilm: null,
      cNews: null,
      // cFooter: {},
      cPlayer: null,
      cProject: null,
      locale: this.getLocale(),
      cAllMusic: null,
    }
    this.playerRef = React.createRef()
  }

  componentDidMount() {
    fetchData(this.state.locale).then(this.setData)
  }

  browserLocale = () => {
    let lang
    if (navigator.languages && navigator.languages.length) {
      ;[lang] = navigator.languages
    } else if (navigator.userLanguage) {
      lang = navigator.userLanguage
    } else {
      lang = navigator.language
    }

    return lang
  }

  getLocale = () => {
    let locale

    if (navigator.languages && navigator.languages.length) {
      ;[locale] = navigator.languages
    } else if (navigator.userLanguage) {
      locale = navigator.userLanguage
    } else {
      locale = navigator.language
    }

    if (
      locale.indexOf('ru') >= 0 ||
      locale.indexOf('Ru') >= 0 ||
      locale.indexOf('RU') >= 0 ||
      locale.indexOf('be') === 0
    )
      return 'ru'
    return 'en-US'
  }

  setData = data => {
    this.setState({
      locale: data.lang,
      cHeader: data.navi,
      cHome: data.main,
      cBio: data.bio,
      cContacts: data.contacts,
      cProject: data.projects,
      cConcert: data.mConcert,
      cFilm: data.mFilm,
      cNews: data.news,
      cPlayer: data.player,
      // cFooter: data.footer,
      cAllMusic: data.music,
    })
  }
  // --data from CMS--

  // its possible work bcs fetch static and this geting from it. Mb add bind
  changeLang = lang => fetchData(lang).then(this.setData)

  render() {
    const {
      cHeader,
      cHome,
      cContacts,
      cBio,
      cConcert,
      cFilm,
      cNews,
      cPlayer,
      cProject,
      locale,
      cAllMusic,
    } = this.state

    const ProjectNews = param => {
      let curentProject = null
      if (cProject)
        // in case of direct link
        cProject.forEach(project => {
          if (param.match.params.projectUrl === project.urlName) curentProject = project
        })
      return curentProject && <News data={cNews} project={curentProject} />
    }

    // in case of direct link check cNews
    const ArticlePage = param =>
      cNews && (
        <Article
          data={
            cNews.articles.filter(article => article.urlName === param.match.params.articleUrl)[0]
          }
          locale={locale}
        />
      )

    return (
      <BrowserRouter>
        <div className="App">
          <Header data={cHeader} onClick={this.changeLang} />
          <div
            className="container"
            style={{
              paddingBottom: this.playerRef.current && this.playerRef.current.clientHeight,
            }}>
            <Switch>
              <Route path="/home" component={() => <Home data={cHome} />} />
              <Route path="/biography" component={() => <Bio data={cBio} />} />
              <Route path="/news" component={() => <News data={cNews} />} />
              <Route path="/concert_music" component={() => <Music data={cConcert} />} />
              <Route path="/film_music" component={() => <Music data={cFilm} />} />
              <Route path="/contacts" component={() => <Contacts data={cContacts} />} />
              <Route
                exact
                path="/projects"
                component={() => <Projects data={cProject} locale={locale} />}
              />
              <Route path="/projects/:projectUrl" component={ProjectNews} />
              <Route path="/articles/:articleUrl" component={ArticlePage} />
              <Redirect to="/home" />
            </Switch>
          </div>
          {/* <Footer data={cFooter} /> */}
          <Player player={cPlayer} src={cAllMusic} playerRef={this.playerRef} />
          {/* <div style={{height:height}}></div> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
