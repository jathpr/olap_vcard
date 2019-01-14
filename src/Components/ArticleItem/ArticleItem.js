// @flow

import React, { useState } from 'react'
// import Link from 'react-router-dom/Link'
import Modal from 'react-modal'
import copy from 'copy-to-clipboard'
import { ReactComponent as Share } from './share.svg'
import Article from '../Routes/Article'
import dateToLocale from '../../utils/dateToLocale'
import styles from './article.module.css'

type Props = {
  locale: string,
  popupMessage: string,
  data: {
    urlName: string,
    title: string,
    dateTime: string,
    aboutShort: string,
    linkTitle: string,
    link: string,
    id: string,
    mainPhoto: {
      fields: {
        file: {
          url: string,
        },
        title: string,
        description: string,
      },
      sys: {},
    },
  },
}

Modal.setAppElement('#root')
const customStyles = {
  content: {
    padding: '0',
    backgroundColor: '#f2f2f2',
  },
  overlay: {
    zIndex: '201',
  },
}

function ArticleItem({ data, popupMessage, locale }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isInfoOpen, setIsInfoOpen] = useState(false)

  const url = `https:${data.mainPhoto.fields.file.url}?fm=jpg&fl=progressive&w=300`
  const alt = data.mainPhoto.fields.description

  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  function copyLink() {
    copy(`${window.location.href.split('#')[0]}#${data.id}`)
    setIsInfoOpen(true)
    setTimeout(() => {
      setIsInfoOpen(false)
    }, 3000)
  }

  return (
    <div className={styles.container}>
      <Modal
        shouldFocusAfterRender
        shouldCloseOnOverlayClick={false}
        isOpen={isModalOpen}
        style={customStyles}
        onRequestClose={handleCloseModal}>
        <Article data={data} />
        <button
          type="button"
          className={`${styles.close} button__empty`}
          onClick={handleCloseModal}
        />
      </Modal>
      {/* eslint-disable-next-line */}
      <a id={data.id} className={styles.anchor} />
      <button
        type="button"
        onClick={handleOpenModal}
        className={`${styles.button__container} button__empty`}
        to={`/articles/${data.urlName}`}>
        <img className={styles.image} src={url} alt={alt} />
        <div className={styles.text__container}>
          <h3 className={styles.text__date}>{dateToLocale(data.dateTime, locale)}</h3>
          <h2 className={styles.text__title}>{data.title}</h2>
          <p className={styles.text__body}>{data.aboutShort}</p>
        </div>
      </button>
      <button type="button" className={`${styles.button__share} button__empty`} onClick={copyLink}>
        <Share />
        <span
          className={`${styles.popup__text} ${isInfoOpen ? styles.popup_show : styles.popup_hide}`}>
          {popupMessage}
        </span>
      </button>
    </div>
  )
}

export default ArticleItem
