// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import Link from 'react-router-dom/Link'
import Modal from 'react-modal'
import ListenButton from '../ListenButton'
import { ReactComponent as Mail } from './mail.svg'
import { ReactComponent as FB } from './facebook.svg'
import { ReactComponent as Phone } from './phone.svg'
import { ReactComponent as VK } from './vk.svg'
import styles from './header.module.css'

type Props = {
  className: string,
  isPlayerVisible: boolean,
  toggleMenu: Function,
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

function Header({ data, className, isPlayerVisible, toggleMenu }: Props) {
  // const toggleMenu = e => {
  //   if (e) {
  //     e.preventDefault()
  //   }
  //   this.setState({ collapsed: !this.state.collapsed })
  // }

  return (
    <header className={`${className} ${styles.header}`}>
      <ListenButton />
      <nav className={styles.nav}>
        <NavLink
          activeClassName={styles.nav__link_active}
          className={styles.nav__link}
          to="/home"
          onClick={toggleMenu(false)}>
          {data.home}
        </NavLink>
        <NavLink className={styles.nav__link} to="/biography" onClick={toggleMenu(false)}>
          {data.biography}
        </NavLink>
        <NavLink className={styles.nav__link} to="/projects" onClick={toggleMenu(false)}>
          {data.projects}
        </NavLink>
        <NavLink className={styles.nav__link} to="/news" onClick={toggleMenu(false)}>
          {data.news}
        </NavLink>
        <NavLink className={styles.nav__link} to="/music" onClick={toggleMenu(false)}>
          {data.music}
        </NavLink>
      </nav>
      <div className={styles['button-social__container']}>
        <a
          className={`${styles['button-social']} ${styles['button-connect']} ${
            styles['button-connect_email']
          }`}
          href={`mailto:${data.eMail}`}>
          <Mail />
        </a>
        <a
          className={`${styles['button-social']} ${styles['button-connect']} ${
            styles['button-connect_phone']
          }`}
          href={`tel:${data.number}`}>
          <Phone />
        </a>
        <Link
          to="//www.facebook.com/olga.podgaiskaja"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['link-social']}>
          <button type="button" className={styles['button-social']}>
            <FB />
          </button>
        </Link>
        <Link
          to="//vk.com/id12970969"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['link-social']}>
          <button type="button" className={styles['button-social']}>
            <VK />
          </button>
        </Link>
      </div>
      <div className={styles.text__container}>
        <span className={styles['text-connect']}>{data.number}</span>
        {/* <br /> */}
        <span
          className={`${styles['text-connect']} ${isPlayerVisible ? styles['margin-bottom'] : ''}`}>
          {data.eMail}
        </span>{' '}
      </div>
    </header>
  )
}

export default Header
