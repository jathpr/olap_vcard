// @flow

import * as React from 'react'
import GoogleMapEmbed from '../../GoogleMapEmbed'
import dateToLocale from '../../../utils/dateToLocale'
import styles from './article.module.css'

type Props = {
  data: {
    title: string,
    fullText: string,
    link: string,
    linkTitle: string,
    dateTime: string,
    mainPhoto: {
      fields: {
        file: {
          url: string,
        },
        title: string,
      },
      sys: {},
    },
    location: {
      lat: number,
      lon: number,
    },
  },
  locale: string,
}

function Article({ data, locale }: Props) {
  if (!data) return null

  const imgUrl = `https:${data.mainPhoto.fields.file.url}?fm=jpg&fl=progressive&w=800`
  const alt = data.mainPhoto.fields.title

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2>{data.title}</h2>
        <h3>{dateToLocale(data.dateTime, locale)}</h3>
      </div>
      <img className={styles.image} src={imgUrl} alt={alt} />
      {data.location && (
        <GoogleMapEmbed className={styles.map} lat={data.location.lat} lng={data.location.lon} />
      )}
      <div className={styles.about}>
        <p>{data.fullText}</p>
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          {data.linkTitle}
        </a>
      </div>
    </div>
  )
}

export default Article
