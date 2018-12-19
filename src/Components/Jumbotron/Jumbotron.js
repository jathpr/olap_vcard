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
  cProject: Array<{
    title: string,
    urlName: string,
  }>,
}

function Jumbotron({ pathname, cHome, cHeader, cProject, className }: Props) {
  const arr = pathname.split('/')
  if (arr[0] === '') arr.shift()
  let title = ''
  if (arr.length > 1) {
    cProject.forEach(project => {
      if (project.urlName === arr[1]) {
        ;({ title } = project)
      }
    })
  } else if (Object.prototype.hasOwnProperty.call(cHeader, arr[0]))
    title = cHeader[arr[0]].toUpperCase()
  return (
    <div className={`${className} ${styles.container}`}>
      <div className={`${styles.text} ${styles.text__about}`}>{cHome.fewWords.toUpperCase()}</div>
      <div className={`${styles.text} ${styles.text__name}`}>
        {/* <a href="https://podolatest.firebaseapp.com/home" target="_blank" rel="noopener noreferrer"> */}
        {cHome.name.toUpperCase()}
        {/* </a> */}
      </div>
      <div className={`${styles.text} ${styles.text__title}`}>{title}</div>
    </div>
  )
}

export default Jumbotron
