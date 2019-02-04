// @flow

// import React, { useState } from 'react'
import React from 'react'
import ArticleItem from '../../ArticleItem'
import styles from './news.module.css'

type Props = {
  project: {
    title: string,
    about: string,
    urlName: string,
    id: string,
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
  data: Array<{
    id: string,
    project: any,
    createdAt: string,
    dateTime: string,
  }>,
}

function News({ project, data }: Props) {
  // const [isArchive, setIsArchive] = useState(false)

  const isArticleConnectedWithProject = shownProject =>
    shownProject && shownProject.some(({ sys: { id } }) => project.id === id)

  return (
    <div className={styles.container}>
      {data
        .filter(article => !project || isArticleConnectedWithProject(article.project))
        .sort((d1, d2) => Date.parse(d2.createdAt) - Date.parse(d1.createdAt))
        // .sort((d1, d2) => {
        //   if (new Date() - Date.parse(d2.dateTime) < 0 || new Date() - Date.parse(d1.dateTime) < 0)
        //   Date.parse(d2.dateTime) - Date.parse(d1.dateTime))}
        .map(article => (
          <div key={article.id}>
            <ArticleItem data={article} />
          </div>
        ))}
      {/* <button
        type="button"
        onClick={() => {
          setIsArchive(true)
        }}
        className={styles.button}>
        archive
      </button> */}
    </div>
  )
}

export default News
