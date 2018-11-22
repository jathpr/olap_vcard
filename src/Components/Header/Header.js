// @flow

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

type Props = {
  className: string,
  onClick: Function,
  data: {
    home: string,
    bio: string,
    projects: string,
    news: string,
    musicConcert: string,
    musicFilm: string,
    music: string,
    contacts: string,
    russian: string,
    english: string,
  },
}

function Header({ data, onClick, className }: Props) {
  const [isMusicOpen, setIsMusicOpen] = useState(false)

  return (
    <header className={`${className} ${styles.header}`}>
      <nav className={styles.nav}>
        <NavLink className={styles.nav_link} to="/home">
          {data.home}
        </NavLink>
        <NavLink className={styles.nav_link} to="/biography">
          {data.bio}
        </NavLink>
        <NavLink className={styles.nav_link} to="/projects">
          {data.projects}
        </NavLink>
        <NavLink className={styles.nav_link} to="/news">
          {data.news}
        </NavLink>
        <button
          type="button"
          className={styles.nav_link}
          onClick={() => setIsMusicOpen(!isMusicOpen)}>
          {data.music}
        </button>
        {isMusicOpen && (
          <ul>
            <NavLink className={styles.nav_link} to="/concert_music">
              {data.musicConcert}
            </NavLink>
            <NavLink className={styles.nav_link} to="/film_music">
              {data.musicFilm}
            </NavLink>
          </ul>
        )}
        <NavLink className={styles.nav_link} to="/contacts">
          {data.contacts}
        </NavLink>
      </nav>
      <div className={styles.lang__container}>
        <button type="button" onClick={() => onClick('ru')} className={`${styles.lang__button}`}>
          {data.russian}
        </button>
        <button type="button" onClick={() => onClick('en-US')} className={`${styles.lang__button}`}>
          {data.english}
        </button>
      </div>
    </header>
  )
}

export default Header
