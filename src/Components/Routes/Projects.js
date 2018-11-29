import React from 'react'
import Project from '../Project'

function Projects({ data }) {
  if (data) {
    return (
      <div className="row">
        {data.map(project => (
          <div className="col-12 col-lg-6 m-auto p-3 pl-5 pr-5" key={project.id}>
            <Project data={project} />
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default Projects
