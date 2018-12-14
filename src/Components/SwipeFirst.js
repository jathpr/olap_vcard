import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Swipe from 'swipe-js-iso'

class ReactSwipe extends Component {
  static propTypes = {
    swipeOptions: PropTypes.shape({
      startSlide: PropTypes.number,
      speed: PropTypes.number,
      auto: PropTypes.number,
      continuous: PropTypes.bool,
      disableScroll: PropTypes.bool,
      stopPropagation: PropTypes.bool,
      swiping: PropTypes.func,
      callback: PropTypes.func,
      transitionEnd: PropTypes.func,
    }),
    style: PropTypes.shape({
      container: PropTypes.object,
      wrapper: PropTypes.object,
      child: PropTypes.object,
    }),
    className: PropTypes.string,
    childCount: PropTypes.number,
  }

  static defaultProps = {
    swipeOptions: {},
    style: {
      container: {
        width: '400px',
        overflow: 'hidden',
        visibility: 'hidden',
        position: 'relative',
        display: 'inline-block',
      },
      wrapper: {
        width: '300px',
        overflow: 'hidden',
        position: 'relative',
      },
      child: {
        float: 'left',
        width: '200px',
        height: '200px',
        position: 'relative',
        transitionProperty: 'transform',
      },
    },
    className: '',
    childCount: 0,
  }

  componentDidMount() {
    this.swipe = Swipe(this.containerEl, this.props.swipeOptions)
  }

  componentDidUpdate(prevProps) {
    const { childCount } = this.props
    // swipeOptions
    const shouldUpdateSwipeInstance = prevProps.childCount !== childCount // || !isEqual(prevProps.swipeOptions, swipeOptions)

    if (shouldUpdateSwipeInstance) {
      this.swipe.kill()
      this.swipe = Swipe(this.containerEl, this.props.swipeOptions)
    }
  }

  componentWillUnmount() {
    this.swipe.kill()
    this.swipe = undefined
  }

  getNumSlides() {
    return this.swipe.getNumSlides()
  }

  getPos() {
    return this.swipe.getPos()
  }

  next() {
    this.swipe.next()
  }

  prev() {
    this.swipe.prev()
  }

  slide(...args) {
    this.swipe.slide(...args)
  }

  render() {
    const { id, className, style, children } = this.props

    return (
      <div
        id={id}
        ref={el => {
          this.containerEl = el
        }}
        className={`react-swipe-container ${className}`}
        style={style.container}>
        <div style={style.wrapper}>
          {React.Children.map(children, child => {
            if (!child) {
              return null
            }

            const childStyle = child.props.style
              ? { ...style.child, ...child.props.style }
              : style.child

            return React.cloneElement(child, { style: childStyle })
          })}
        </div>
      </div>
    )
  }
}

export default ReactSwipe
