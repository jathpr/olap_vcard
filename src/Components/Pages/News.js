import React from 'react'
import Article from '../ArticlePreview'

function News({ project, data }) {
  const isArticleConnectedWithProject = shownProject =>
    shownProject && shownProject.some(({ sys: { id } }) => project.id === id)

  if (data) {
    return (
      <React.Fragment>
        <h1>{project ? project.title : null}</h1>
        <div className="row">
          {data.articles
            .filter(article => !project || isArticleConnectedWithProject(article.project))
            .sort((d1, d2) => Date.parse(d2.createdAt) - Date.parse(d1.createdAt))
            .map(article => (
              <div className="col-12 col-md-5 col-lg-4 m-auto p-3 pl-5 pr-5" key={article.id}>
                <Article data={article} locale={data.locale} />
              </div>
            ))}
        </div>
      </React.Fragment>
    )
  }
  return null
}

export default News
