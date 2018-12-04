// @flow

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
  }>,
}

function News({ project, data }: Props) {
  const isArticleConnectedWithProject = shownProject =>
    shownProject && shownProject.some(({ sys: { id } }) => project.id === id)

  return (
    <>
      {/* <h1>{project ? project.title : null}</h1> */}
      <div className={styles.container}>
        {data
          .filter(article => !project || isArticleConnectedWithProject(article.project))
          .sort((d1, d2) => Date.parse(d2.createdAt) - Date.parse(d1.createdAt))
          .map(article => (
            <div key={article.id}>
              <ArticleItem data={article} />
            </div>
          ))}
      </div>
    </>
  )
}

export default News
