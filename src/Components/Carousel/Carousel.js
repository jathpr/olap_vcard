// @flow

import * as React from 'react'
import { ReactComponent as Arrow } from './Right.svg'
import styles from './carousel.module.css'

type Props = {
  children: Array<React.Node>,
}

function Caorusel({ children }: Props) {
  if (!children) return null
  const [currentItem, setCurrentItem] = React.useState(0)

  if (!children.length) {
    return (
      <div className={styles.items}>
        {/* <div className={styles.container} style={{ justifyContent: 'center' }}> */}
        <div className={`${styles.item} ${styles.item_center}`}>{children}</div>
      </div>
    )
  }

  const nextItem = next => {
    if (next >= children.length) return 0
    if (next < 0) return children.length - 1
    return next
  }

  const handleClick = direct => () => setCurrentItem(nextItem(currentItem + direct))

  //   const items = children.map((element, index) => (
  //     <div key={index} className={`${item} ${item_visible} ${item_center}`}>
  //       {element}
  //     </div>
  //   ))

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrow_left}`}
        onClick={handleClick(-1)}>
        <Arrow />
      </button>
      <div className={`${styles.item} ${styles.item_side}`}>{children[currentItem]}</div>
      <div className={`${styles.item} ${styles.item_center}`}>
        {children[nextItem(currentItem + 1)]}
      </div>
      <div className={`${styles.item} ${styles.item_side}`}>
        {children[nextItem(nextItem(currentItem + 1) + 1)]}
      </div>
      {/* <div className={styles.items}>{styles.items}</div> */}
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrow_right}`}
        onClick={handleClick(1)}>
        <Arrow />
      </button>
    </div>
  )
}

export default Caorusel
