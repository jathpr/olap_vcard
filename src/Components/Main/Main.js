import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ReactComponent as MenuImg } from './menu.svg'
import Home from '../Routes/Home'
import Biography from '../Routes/Biography'
import News from '../Routes/News'
import Music from '../Routes/Music'
// import Contacts from '../Routes/Contacts'
import Projects from '../Routes/Projects'
import Header from '../Header'
import Article from '../Routes/Article'
import AudioPlayer from '../Player/AudioPlayer'
import LangSelector from '../LangSelector'
import Jumbotron from '../Jumbotron'
// import ReactSwipe from '../SwipeFirst'
// import ListenButton from '../ListenButton'
// import ReactSwipe from '../SwipeTabs'
import styles from './main.module.css'

function Main({ data, showPlayer, location, toggleMenu, showMenu }) {
  if (!data) return <div />
  const { cNews, cProject } = data
  const isJumbo = location.pathname !== process.env.REACT_APP_HOME

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
        data={cNews.filter(article => article.urlName === param.match.params.articleUrl)[0]}
      />
    )
  // const isSmallScreen = window.innerWidth < 600

  return (
    <div className={styles.wrapper}>
      {/* <ReactSwipe /> */}
      {/* <div style={{ backgroundColor: 'red', display: 'inline-block', width: 200, height: 200 }} /> */}
      <Header
        className={`${styles.header} ${showMenu ? styles.header_show : styles.header_hide}`}
        location={location}
      />
      <button type="button" className={styles.menu__button} onClick={toggleMenu(!showMenu)}>
        <MenuImg />
      </button>
      {/* <ListenButton /> */}
      <Jumbotron pathname={location.pathname} className={styles.jumbo} />
      <main
        className={`${styles.main} ${isJumbo && styles.main_content} ${
          showMenu ? styles.main_part : styles.main_full
        }`}>
        <Switch>
          <Route path={process.env.REACT_APP_HOME} component={Home} />
          <Route path="/biography" component={Biography} />
          <Route path="/news" component={News} />
          {/* <Route path="/concert_music" component={() => <Music data={cConcert} />} />
          <Route path="/film_music" component={() => <Music data={cFilm} />} /> */}
          <Route path="/music" component={Music} />
          {/* <Route path="/contacts" component={() => <Contacts data={cContacts} />} /> */}
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:projectUrl" component={ProjectNews} />
          <Route path="/articles/:articleUrl" component={ArticlePage} />
          <Redirect to="/home" />
        </Switch>
        {showPlayer && isJumbo && <div className={styles['content-margin']} />}
      </main>
      <AudioPlayer showPlayer={showPlayer} />
      {/* className={styles.player} */}
      <LangSelector />
    </div>
  )
}

export default Main
