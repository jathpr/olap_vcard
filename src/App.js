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
      cHeader: {}, //c is for Content
      cHome: null, //nul for not drawing, {} for drowing from local data
      cContacts: null,
      cBio: null,
      cConcert: null,
      cFilm: null,
      cNews: null,
      cFooter: {},
      cPlayer: null,
      cProject: null,
      locale: this.getLocale(),
      cAllMusic: null,
      height: 200,
    }
    this.playerRef = React.createRef()
  }

  browserLocale = () => {
    let lang

    if (navigator.languages && navigator.languages.length) {
      lang = navigator.languages[0]
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
      locale = navigator.languages[0]
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

  // --data from CMS--
  componentDidMount() {
    fetchData(this.state.locale).then(this.setData)
    // const height = this.playerEl.clientHeight;
    // const DOMNode = ReactDOM.findDOMNode(this.playerRef.current);
    this.setState({
      height: this.playerRef.current && this.playerRef.current.clientHeight,
    })
    // console.log(this.playerRef.current.offsetHeight);
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
      cFooter: data.footer,
      cAllMusic: data.music,
    })
  }
  // --data from CMS--

  //its possible work bcs fetch static and this geting from it. Mb add bind
  changeLang = lang => fetchData(lang).then(this.setData)

  render() {
    const ProjectNews = param => {
      let curentProject = null
      console.log('curentProject')
      console.log(curentProject)
      if (this.state.cProject)
        //in case of direct link
        this.state.cProject.forEach(project => {
          if (param.match.params.projectUrl === project.urlName)
            curentProject = project
        })
      console.log(curentProject)
      return (
        curentProject && (
          <News data={this.state.cNews} project={curentProject} />
        )
      )
    }

    const ArticlePage = param => {
      // if (this.state.cNews)
      //in case of direct link check this.state.cNews
      return (
        this.state.cNews && (
          <Article
            data={
              this.state.cNews.articles.filter(
                article => article.urlName === param.match.params.articleUrl
              )[0]
            }
            locale={this.state.locale}
          />
        )
      )
      // return null
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Header data={this.state.cHeader} onClick={this.changeLang} />
          <div
            className="container"
            style={{
              paddingBottom:
                this.playerRef.current && this.playerRef.current.clientHeight,
            }}>
            <Switch>
              <Route
                path="/home"
                component={() => <Home data={this.state.cHome} />}
              />
              <Route
                path="/biography"
                component={() => <Bio data={this.state.cBio} />}
              />
              <Route
                path="/news"
                component={() => <News data={this.state.cNews} />}
              />
              <Route
                path="/concert_music"
                component={() => <Music data={this.state.cConcert} />}
              />
              <Route
                path="/film_music"
                component={() => <Music data={this.state.cFilm} />}
              />
              <Route
                path="/contacts"
                component={() => <Contacts data={this.state.cContacts} />}
              />
              <Route
                exact
                path="/projects"
                component={() => (
                  <Projects
                    data={this.state.cProject}
                    locale={this.state.locale}
                  />
                )}
              />
              <Route path="/projects/:projectUrl" component={ProjectNews} />
              <Route path="/articles/:articleUrl" component={ArticlePage} />
              <Redirect to="/home" />
            </Switch>
          </div>
          {/* <Footer data={this.state.cFooter} /> */}
          <Player
            player={this.state.cPlayer}
            src={this.state.cAllMusic}
            playerRef={this.playerRef}
          />
          {/* <div style={{height:this.state.height}}></div> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
