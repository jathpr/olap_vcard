// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import Link from 'react-router-dom/Link'
import Modal from 'react-modal'
import ListenButton from '../ListenButton'
import styles from './header.module.css'

type Props = {
  className: string,
  isPlayerVisible: boolean,
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
    eMail: string,
    number: string,
    sendEMail: string,
    call: string,
  },
}

Modal.setAppElement('#root')

function Header({ data, className, isPlayerVisible }: Props) {
  return (
    <header className={`${className} ${styles.header}`}>
      <ListenButton />
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
        <NavLink className={styles.nav__link} to="/music">
          {data.music}
        </NavLink>
      </nav>
      <div className={styles['button-social__container']}>
        <a
          className={`${styles['button-social']} ${styles['button-connect']} ${
            styles['button-connect_email']
          }`}
          href={`mailto:${data.eMail}`}>
          {data.sendEMail}
        </a>
        <a
          className={`${styles['button-social']} ${styles['button-connect']} ${
            styles['button-connect_phone']
          }`}
          href={`tel:${data.number}`}>
          {data.call}
        </a>
        <br />
        <Link to="//www.facebook.com/olga.podgaiskaja" target="_blank" rel="noopener noreferrer">
          <button type="button" className={styles['button-social']}>
            Fb
          </button>
        </Link>
        <Link to="//vk.com/id12970969" target="_blank" rel="noopener noreferrer">
          <button type="button" className={styles['button-social']}>
            Vk
          </button>
        </Link>
      </div>
      <span className={styles['text-connect']}>{data.number}</span> <br />
      <span
        className={styles['text-connect']}
        style={isPlayerVisible ? { marginBottom: '60px' } : null}>
        {data.eMail}
      </span>{' '}
      <br />
    </header>
  )
}

export default Header
