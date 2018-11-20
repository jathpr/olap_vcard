import React from 'react'
import styles from './collapse.module.css'

function Collapse({ toggler, children }) {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { className: styles.collapse__body })
  )
  return (
    <div
      className={[
        styles.collapse__container, // container remove scroll when animation active
        toggler ? styles.collapse_shown : styles.collapse_hide,
      ].join(' ')}>
      {childrenWithProps}
    </div>
  )
}

export default Collapse
