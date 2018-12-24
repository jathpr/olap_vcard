// @flow

import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
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

  const handleChangeIndex = index => {
    setCurrentItem(index)
  }

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
      <SwipeableViews
        index={currentItem}
        className={styles.root}
        resistance
        // threshold={20}
        // hysteresis={0.4}
        // springConfig={{ duration: '0.7s', easeFunction: 'ease-out', delay: '0s' }}
        // onSwitching={this.handleSwitch}
        onChangeIndex={handleChangeIndex}>
        {children.map((album, currentIndex) => {
          const style = currentIndex === currentItem ? styles.slide_middle : styles.slide_side

          return (
            <div
              key={String(currentIndex)}
              className={`${styles.slide}  ${style}`}
              // style={{ opacity, transform: `scale(${scale})`}}
            >
              {/* <img className={styles.image} src={album.src} alt="cover" /> */}
              {/* {album.name} */}
              {children[currentIndex]}
            </div>
          )
        })}
      </SwipeableViews>

      {/* <div className={`${styles.item} ${styles.item_side}`}>{children[currentItem]}</div>
      <div className={`${styles.item} ${styles.item_center}`}>
        {children[nextItem(currentItem + 1)]}
      </div>
      <div className={`${styles.item} ${styles.item_side}`}>
        {children[nextItem(nextItem(currentItem + 1) + 1)]}
      </div> */}
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
