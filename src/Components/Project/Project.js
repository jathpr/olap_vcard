// @flow

import React from 'react'
import Link from 'react-router-dom/Link'
import styles from './project.module.css'

type Props = {
  data: {
    title: string,
    about: string,
    urlName: string,
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
function Project({ data }: Props) {
  const url = `https:${data.photo.fields.file.url}?fm=jpg&fl=progressive&w=400`
  const alt = data.photo.fields.description

  return (
    <Link to={`/projects/${data.urlName}`} className={styles.container}>
      <img className={styles.image} src={url} alt={alt} />
      <div className={styles.text__container}>
        <h2 className={styles.text__title}>{data.title}</h2>
        <p className={styles.text__body}>{data.about}</p>
      </div>
    </Link>
  )
}

export default Project
