import React from 'react'
import SwipeableViews from 'react-swipeable-views'
// import { virtualize, bindKeyboard } from 'react-swipeable-views-utils'

// const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews))

const styles = {
  root: {
    background: '#000',
    padding: '0 20vw',
  },
  slide: {
    padding: '24px 16px',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
    transition: '0.5s',
    overflow: 'hidden',
  },
  img: {
    width: 180,
    height: 180,
    display: 'block',
    marginBottom: 16,
    backgroundColor: 'red',
  },
}

const albums = [
  {
    name: 'Lost Horizons',
    src: '/static/album-art-8.jpg',
  },
  {
    name: 'Abbey Road',
    src: '/static/album-art-1.jpg',
  },
  {
    name: 'Bat Out of Hell',
    src: '/static/album-art-2.jpg',
  },
  {
    name: 'Homogenic',
    src: '/static/album-art-3.jpg',
  },
  {
    name: 'Number of the Beast',
    src: '/static/album-art-4.jpg',
  },
  {
    name: "It's Blitz",
    src: '/static/album-art-5.jpg',
  },
  {
    name: 'The Man-Machine',
    src: '/static/album-art-6.jpg',
  },
  {
    name: 'The Score',
    src: '/static/album-art-7.jpg',
  },
  {
    name: 'Lost Horizons',
    src: '/static/album-art-8.jpg',
  },
  {
    name: 'Abbey Road',
    src: '/static/album-art-1.jpg',
  },
]

class DemoCoverflow extends React.Component {
  state = {
    index: 1,
  }

  handleChangeIndex = index => {
    switch (index) {
      case 0:
        this.setState({ index: albums.length - 2 })
        break
      case albums.length - 1:
        this.setState({ index: 1 })
        break
      default:
        this.setState({ index })
        break
    }
  }

  // handleSwitch = (index, type) => {
  //   if (type === 'end') {
  //     console.log('end')
  //     return
  //   }
  //   if (index < -0.2) {
  //     this.setState({ index: albums.length - 1 })
  //     return
  //   }
  //   if (index > albums.length - 0.8) {
  //     this.setState({ index: 0 })
  //   }
  // }

  nextItem = next => {
    if (next >= albums.length) return 0
    if (next < 0) return albums.length - 1
    return next
  }

  handleClick = direct => () => direct // this.setState({ index: this.nextItem(this.state.index + direct) })

  render() {
    const { index } = this.state

    return (
      <>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrow_left}`}
          onClick={this.handleClick(-1)}>
          Left
        </button>
        <SwipeableViews
          index={index}
          style={styles.root}
          resistance
          threshold={20}
          hysteresis={0.4}
          springConfig={{ duration: '0.7s', easeFunction: 'ease-out', delay: '0s' }}
          // onSwitching={this.handleSwitch}
          onChangeIndex={this.handleChangeIndex}>
          {albums.map((album, currentIndex) => {
            const scale = currentIndex === this.state.index ? 1 : 0.7
            const opacity = currentIndex === this.state.index ? 1 : 0.7
            // const translateX = (100 / 2) * currentIndex
            console.log('currentIndex === this.state.index')
            console.log(currentIndex === this.state.index)

            return (
              <div
                key={String(currentIndex)}
                style={Object.assign(
                  {
                    opacity,
                    transform: `scale(${scale})`, // translateX(${translateX}px)`,
                  },
                  styles.slide
                )}>
                <img style={styles.img} src={album.src} alt="cover" />
                {album.name}
              </div>
            )
          })}
          {/* <div /> */}
        </SwipeableViews>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrow_right}`}
          onClick={this.handleClick(1)}>
          Right
        </button>
      </>
    )
  }
}

export default DemoCoverflow
