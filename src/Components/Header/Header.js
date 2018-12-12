// @flow

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Link from 'react-router-dom/Link'
import Modal from 'react-modal'
import ListenButton from '../ListenButton'
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

Modal.setAppElement('#root')
const customStyles = {
  overlay: {
    zIndex: '200',
  },
}

function Header({ data, className }: Props) {
  // const [isMusicOpen, setIsMusicOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        {/* <button
          type="button"
          className={styles.nav__link}
          onClick={() => setIsMusicOpen(!isMusicOpen)}>
          {data.music}
        </button>
        {isMusicOpen && (
          <ul>
            <NavLink className={styles.nav__link} to="/music">
              {data.concert_music}
            </NavLink>
            <NavLink className={styles.nav__link} to="/film_music">
              {data.film_music}
            </NavLink>
          </ul>
        )} */}
        <NavLink className={styles.nav__link} to="/contacts">
          {data.contacts}
        </NavLink>
      </nav>
      <div className={styles['button-social__container']}>
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
        {/* <button
          type="button"
          className={styles['button-social']}
          onClick={() => setIsModalOpen(true)}>
          Mod
        </button> */}
        <Modal
          isOpen={isModalOpen}
          style={customStyles}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Minimal Modal Example">
          <button type="button" onClick={() => setIsModalOpen(false)}>
            Close Modal
          </button>
        </Modal>
      </div>
    </header>
  )
}

export default Header
