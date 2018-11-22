// @flow

import React from 'react'
import styles from './home.module.css'

type Props = {
  className: string,
  data: {
    fewWords: string,
    name: string,
    shortBio: string,
    photo: {
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

function Home({ data }: Props) {
  if (data) {
    const url = `https:${data.photo.fields.file.url}?fm=jpg&fl=progressive&w=1200`
    const alt = data.photo.fields.description
    return (
      <>
        <div className={`${styles.text} ${styles.text__name}`}>{data.name}</div>
        <div className={`${styles.text} ${styles.text__about}`}>{data.fewWords}</div>
        <img className={styles.image} src={url} alt={alt} />
        {/* <p>{data.shortBio}</p> */}
      </>
    )
  }
  return null
}

export default Home
