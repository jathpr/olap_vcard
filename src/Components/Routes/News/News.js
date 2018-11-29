import React from 'react'
import Article from '../../ArticleItem'
// import styles from './news.module.css'

function News({ project, data }) {
  const isArticleConnectedWithProject = shownProject =>
    shownProject && shownProject.some(({ sys: { id } }) => project.id === id)

  if (data) {
    return (
      <div className="grid__main">
        <h1>{project ? project.title : null}</h1>
        <div className="row">
          {data
            .filter(article => !project || isArticleConnectedWithProject(article.project))
            .sort((d1, d2) => Date.parse(d2.createdAt) - Date.parse(d1.createdAt))
            .map(article => (
              <div className="col-12 col-md-5 col-lg-4 m-auto p-3 pl-5 pr-5" key={article.id}>
                <Article data={article} />
              </div>
            ))}
        </div>
      </div>
    )
  }
  return null
}

export default News
