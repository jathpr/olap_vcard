import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Routes/Home'
import Biography from '../Routes/Biography'
import News from '../Routes/News'
import Music from '../Routes/Music'
import Contacts from '../Routes/Contacts'
import Projects from '../Routes/Projects'
import Header from '../Header'
import Article from '../Routes/Article'
import AudioPlayer from '../Player/AudioPlayer'
import ListenButton from '../ListenButton'
import LangSelector from '../LangSelector'
import Jumbotron from '../Jumbotron'
import styles from './main.module.css'

function Main({ data, showPlayer, location }) {
  if (!data) return <div />
  const { cContacts, cConcert, cFilm, cNews, cPlayer, cProject, cAllMusic } = data
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

  return (
    <div className={styles.grid__wrapper}>
      <Header className={styles.grid__header} location={location} />
      {isJumbo && <Jumbotron pathname={location.pathname} className={styles.grid__jumbo} />}
      <main className={isJumbo ? styles.grid__content : styles.grid__main}>
        <Switch>
          <Route path={process.env.REACT_APP_HOME} component={Home} />
          <Route path="/biography" component={Biography} />
          <Route path="/news" component={News} />
          <Route path="/concert_music" component={() => <Music data={cConcert} />} />
          <Route path="/film_music" component={() => <Music data={cFilm} />} />
          <Route path="/contacts" component={() => <Contacts data={cContacts} />} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:projectUrl" component={ProjectNews} />
          <Route path="/articles/:articleUrl" component={ArticlePage} />
          <Redirect to="/home" />
        </Switch>
        {showPlayer && <div className={styles['content-margin']} />}
      </main>
      {showPlayer && (
        <AudioPlayer
          player={cPlayer}
          src={cAllMusic}
          autoplay={false}
          // className={styles.grid__player}
        />
      )}
      <ListenButton />
      <LangSelector />
    </div>
  )
}

export default Main
