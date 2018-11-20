import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Routes/Home/Home'
import Biography from '../Routes/Biography/Biography'
import News from '../Routes/News'
import Music from '../Routes/Music'
import Contacts from '../Routes/Contacts'
import Projects from '../Routes/Projects'
import Header from '../Header/Header'
import { fetchData } from '../Utils/FetchData'
import Article from '../Routes/Article'
import AudioPlayer from '../Player/AudioPlayer'
import ListenButtonWithRouer from '../ListenButtonWithRouer'
import getLocale from '../Utils/getLocale'
import styles from './main.module.css'

class Main extends Component {
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
      <div className={styles.grid__wrapper}>
        <Header data={cHeader} onClick={this.changeLang} />
        <ListenButtonWithRouer
          showPlayer={showPlayer}
          cPlayer={cPlayer}
          onClick={this.handlePlayerButton}
        />
        <Switch>
          <Route
            path={process.env.REACT_APP_HOME}
            component={() => cHome && <Home data={cHome} />}
          />
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
        {showPlayer && (
          <AudioPlayer player={cPlayer} src={cAllMusic} onClose={this.closePlayer} autoplay />
        )}
      </div>
    )
  }
}

export default Main
