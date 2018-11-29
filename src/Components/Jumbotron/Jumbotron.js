// @flow

import React from 'react'
import styles from './jumbotron.module.css'

type Props = {
  pathname: string,
  className: string,
  cHeader: {
    home: string,
    biography: string,
    projects: string,
    news: string,
    concert_music: string,
    film_music: string,
    music: string,
    contacts: string,
    russian: string,
    english: string,
  },
  cHome: {
    fewWords: string,
    name: string,
    shortBio: string,
  },
}

function Jumbotron({ pathname, cHome, cHeader, className }: Props) {
  return (
    <div className={`${className} ${styles.container}`}>
      <div className={`${styles.text} ${styles.text__name}`}>{cHome.name.toUpperCase()}</div>
      <div className={`${styles.text} ${styles.text__about}`}>{cHome.fewWords.toUpperCase()}</div>
      <div className={`${styles.text} ${styles.text__title}`}>
        {cHeader[pathname.slice(1)] && cHeader[pathname.slice(1)].toUpperCase()}
      </div>
    </div>
  )
}

export default Jumbotron
