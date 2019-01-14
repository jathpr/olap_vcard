// @flow

import * as React from 'react'
import GoogleMapEmbed from '../../GoogleMapEmbed'
import dateToLocale from '../../../utils/dateToLocale'
import styles from './article.module.css'
import parse from '../../../utils/richTextParser'

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

  const imgUrl = `https:${data.mainPhoto.fields.file.url}?fm=jpg&fl=progressive`
  const alt = data.mainPhoto.fields.title

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.text__title}>{data.title}</h2>
        <h3>{dateToLocale(data.dateTime, locale)}</h3>
      </div>
      <img className={styles.image} src={imgUrl} alt={alt} />
      <div className={styles.about}>
        <div dangerouslySetInnerHTML={parse(data.fullText)} />
        <a className={styles.link} href={data.link} target="_blank" rel="noopener noreferrer">
          {data.linkTitle}
        </a>
      </div>
      {data.location && (
        <GoogleMapEmbed className={styles.map} lat={data.location.lat} lng={data.location.lon} />
      )}
    </div>
  )
}

export default Article
