// @flow

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

type Props = {
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

function Header({ data, onClick }: Props) {
  const [isMusicOpen, setIsMusicOpen] = useState(false)

  return (
    <header className={styles.header}>
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
      <button type="button" onClick={() => onClick('ru')}>
        {data.russian}
      </button>
      <button type="button" onClick={() => onClick('en-US')} className="ml-2">
        {data.english}
      </button>
    </header>
  )
}

export default Header
