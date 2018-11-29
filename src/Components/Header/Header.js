// @flow

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

type Props = {
  className: string,
  data: {
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
}

function Header({ data, className }: Props) {
  const [isMusicOpen, setIsMusicOpen] = useState(false)

  return (
    <header className={`${className} ${styles.header}`}>
      <nav className={styles.nav}>
        <NavLink activeClassName={styles.nav__link_active} className={styles.nav__link} to="/home">
          {data.home}
        </NavLink>
        <NavLink className={styles.nav__link} to="/biography">
          {data.biography}
        </NavLink>
        <NavLink className={styles.nav__link} to="/projects">
          {data.projects}
        </NavLink>
        <NavLink className={styles.nav__link} to="/news">
          {data.news}
        </NavLink>
        <button
          type="button"
          className={styles.nav__link}
          onClick={() => setIsMusicOpen(!isMusicOpen)}>
          {data.music}
        </button>
        {isMusicOpen && (
          <ul>
            <NavLink className={styles.nav__link} to="/concert_music">
              {data.concert_music}
            </NavLink>
            <NavLink className={styles.nav__link} to="/film_music">
              {data.film_music}
            </NavLink>
          </ul>
        )}
        <NavLink className={styles.nav__link} to="/contacts">
          {data.contacts}
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
