// @flow

import React, { useState } from 'react'
// import Link from 'react-router-dom/Link'
import Modal from 'react-modal'
import Article from '../Routes/Article'
import dateToLocale from '../../utils/dateToLocale'
import styles from './article.module.css'

type Props = {
  locale: string,
  data: {
    urlName: string,
    title: string,
    dateTime: string,
    aboutShort: string,
    linkTitle: string,
    link: string,
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
  overlay: {
    zIndex: '201',
  },
}

function ArticleItem({ data, locale }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const url = `https:${data.mainPhoto.fields.file.url}?fm=jpg&fl=progressive&w=300`
  const alt = data.mainPhoto.fields.description

  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }
  return (
    <>
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
      <button
        type="button"
        onClick={handleOpenModal}
        className={`${styles.container} button__empty`}
        to={`/articles/${data.urlName}`}>
        <img className={styles.image} src={url} alt={alt} />
        <h3 className={styles.text__date}>{dateToLocale(data.dateTime, locale)}</h3>
        <h2 className={styles.text__title}>{data.title}</h2>
        <p className={styles.text__body}>{data.aboutShort}</p>
        {/* <a href={data.link} target="blank">
          {data.linkTitle}
        </a> */}
      </button>
      <div className={styles.separator} />
    </>
  )
}

export default ArticleItem
