// @flow

import React from 'react'
import Link from 'react-router-dom/Link'
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

function ArticleItem({ data, locale }: Props) {
  const url = `https:${data.mainPhoto.fields.file.url}?fm=jpg&fl=progressive&w=300`
  const alt = data.mainPhoto.fields.description

  return (
    <>
      <Link className={styles.container} to={`/articles/${data.urlName}`}>
        <img className={styles.image} src={url} alt={alt} />
        <h2>{data.title}</h2>
        <h3>{dateToLocale(data.dateTime, locale)}</h3>
        <p>{data.aboutShort}</p>
        <a href={data.link} target="blank">
          {data.linkTitle}
        </a>
      </Link>
      <div className={styles.separator} />
    </>
  )
}

export default ArticleItem
