// @flow

import * as React from 'react'
import Project from '../../Project'
import styles from './projects.module.css'

type Props = {
  data: Array<{ id: string }>,
}

function Projects({ data }: Props) {
  return (
    <div className={styles.container}>
      {data.map(project => (
        <Project key={project.id} data={project} />
      ))}
    </div>
  )
}

export default Projects
