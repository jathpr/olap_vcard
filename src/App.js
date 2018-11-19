import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Components/Routes/Home/Home'
import Biography from './Components/Routes/Biography/Biography'
import News from './Components/Routes/News'
import Music from './Components/Routes/Music'
import Contacts from './Components/Routes/Contacts'
import Projects from './Components/Routes/Projects'
import Header from './Components/Header'
import { fetchData } from './Components/Utils/FetchData'
import './App.css'
import Article from './Components/Routes/Article'
import AudioPlayer from './Components/Player/AudioPlayer'
import ListenButtonWithRouer from './Components/ListenButtonWithRouer'
import getLocale from './Components/Utils/getLocale'

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
      cPlayer: null,
      cProject: null,
      locale: getLocale(),
      cAllMusic: null,
      showPlayer: false,
    }
    this.pathRef = React.createRef()
    this.handlePlayerButton = this.handlePlayerButton.bind(this)
    this.closePlayer = this.closePlayer.bind(this)
  }

  componentDidMount() {
    fetchData(this.state.locale).then(this.setData)
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
      cAllMusic: data.music,
    })
  }
  // --data from CMS--

  changeLang = lang => fetchData(lang).then(this.setData)

  handlePlayerButton() {
    this.setState({
      showPlayer: true,
    })
  }

  closePlayer() {
    this.setState({
      showPlayer: false,
    })
  }

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
      showPlayer,
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
      <BrowserRouter getUserConfirmation={this.getConfirmation}>
        <div className="App">
          <Header data={cHeader} onClick={this.changeLang} />
          <ListenButtonWithRouer
            showPlayer={showPlayer}
            cPlayer={cPlayer}
            onClick={this.handlePlayerButton}
          />
          <div
            className="container"
            style={{
              paddingBottom: showPlayer && `${process.env.REACT_APP_AUDIO_HEIGHT}px`,
            }}>
            <Switch>
              <Route path={process.env.REACT_APP_HOME} component={() => <Home data={cHome} />} />
              <Route path="/biography" component={() => cBio && <Biography data={cBio} />} />
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
          {showPlayer && (
            <AudioPlayer player={cPlayer} src={cAllMusic} onClose={this.closePlayer} autoplay />
          )}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
