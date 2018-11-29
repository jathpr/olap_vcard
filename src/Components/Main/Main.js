import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Routes/Home/Home'
import Biography from '../Routes/Biography/Biography'
import News from '../Routes/News/News'
import Music from '../Routes/Music'
import Contacts from '../Routes/Contacts'
import Projects from '../Routes/Projects'
import Header from '../Header/Header'
import Article from '../Routes/Article'
import AudioPlayer from '../Player/AudioPlayer'
import ListenButtonWithRouer from '../ListenButton/ListenButtonWithRouer'
import styles from './main.module.css'

function Main({ data, language, showPlayer, togglePlayer, changeLanguage }) {
  if (!data) return <div />
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
    cAllMusic,
  } = data

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
      <Header data={cHeader} onClick={changeLanguage} className={styles.grid__header} />
      <ListenButtonWithRouer
        showPlayer={showPlayer}
        cPlayer={cPlayer}
        onClick={() => togglePlayer(true)}
      />
      <main className={styles.grid__main}>
        <Switch>
          {cHome && (
            <Route
              path={process.env.REACT_APP_HOME}
              component={() => cHome && <Home data={cHome} />}
            />
          )}
          <Route path="/biography" component={() => cBio && <Biography data={cBio} />} />
          <Route path="/news" component={() => <News data={cNews} />} />
          <Route path="/concert_music" component={() => <Music data={cConcert} />} />
          <Route path="/film_music" component={() => <Music data={cFilm} />} />
          <Route path="/contacts" component={() => <Contacts data={cContacts} />} />
          <Route
            exact
            path="/projects"
            component={() => <Projects data={cProject} locale={language} />}
          />
          <Route path="/projects/:projectUrl" component={ProjectNews} />
          <Route path="/articles/:articleUrl" component={ArticlePage} />
          <Redirect to="/home" />
        </Switch>
      </main>
      {showPlayer && (
        <AudioPlayer
          player={cPlayer}
          src={cAllMusic}
          autoplay={false}
          className={styles.grid__player}
        />
      )}
    </div>
  )
}

export default Main
