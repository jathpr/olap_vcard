import React from 'react'

export default class SwipeItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      left: 0,
      originalOffset: 0,
      velocity: 0,
      timeOfLastDragEvent: 0,
      touchStartX: 0,
      prevTouchX: 0,
      beingTouched: false,
      height: 0,
      intervalId: null,
    }
  }

  componentDidMount() {
    window.setTimeout(() => this.setState({ height: 65 }), 50)
  }

  animateSlidingToZero() {
    let { left, velocity } = this.state
    const { beingTouched } = this.state
    if (!beingTouched && left < -0.01) {
      velocity += 10 * 0.033
      left += velocity
      if (left < -350) {
        window.clearInterval(this.state.intervalId)
        this.handleRemoveSelf()
      }
      this.setState({ left, velocity })
    } else if (!beingTouched) {
      left = 0
      velocity = 0
      window.clearInterval(this.state.intervalId)
      this.setState({ left, velocity, intervalId: null, originalOffset: 0 })
    }
  }

  handleRemoveSelf() {
    this.setState({ height: 0 })
    window.setTimeout(() => this.props.onRemoval(), 250)
  }

  handleStart(clientX) {
    if (this.state.intervalId !== null) {
      window.clearInterval(this.state.intervalId)
    }
    const { left } = this.state
    this.setState({
      originalOffset: left,
      velocity: 0,
      timeOfLastDragEvent: Date.now(),
      touchStartX: clientX,
      beingTouched: true,
      intervalId: null,
    })
  }

  handleMove(clientX) {
    const {
      beingTouched,
      timeOfLastDragEvent,
      prevTouchX,
      touchStartX,
      originalOffset,
    } = this.state
    if (beingTouched) {
      const touchX = clientX
      const currTime = Date.now()
      const elapsed = currTime - timeOfLastDragEvent
      const velocity = (20 * (touchX - prevTouchX)) / elapsed
      let deltaX = touchX - touchStartX + originalOffset
      if (deltaX < -350) {
        this.handleRemoveSelf()
      } else if (deltaX > 0) {
        deltaX = 0
      }
      this.setState({
        left: deltaX,
        velocity,
        timeOfLastDragEvent: currTime,
        prevTouchX: touchX,
      })
    }
  }

  handleEnd() {
    const { velocity } = this.state
    this.setState({
      velocity,
      touchStartX: 0,
      beingTouched: false,
      intervalId: window.setInterval(this.animateSlidingToZero.bind(this), 10),
    })
  }

  handleTouchStart(touchStartEvent) {
    touchStartEvent.preventDefault()
    this.handleMotionStart(touchStartEvent.targetTouches[0].clientX)
  }

  handleTouchMove(touchMoveEvent) {
    this.handleMove(touchMoveEvent.targetTouches[0].clientX)
  }

  handleTouchEnd() {
    this.handleEnd()
  }

  handleMouseDown(mouseDownEvent) {
    mouseDownEvent.preventDefault()
    this.handleStart(mouseDownEvent.clientX)
  }

  handleMouseMove(mouseMoveEvent) {
    this.handleMove(mouseMoveEvent.clientX)
  }

  handleMouseUp() {
    this.handleEnd()
  }

  handleMouseLeave() {
    this.handleMouseUp()
  }

  render() {
    return (
      <li>
        <div
          role="button"
          tabIndex="0"
          className="swipeItem"
          style={{ height: `${this.state.height}px`, transition: 'height 250ms ease-in-out' }}
          onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
          onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => this.handleTouchEnd()}
          // The following event handlers are for mouse compatibility:
          onMouseDown={mouseDownEvent => this.handleMouseDown(mouseDownEvent)}
          onMouseMove={mouseMoveEvent => this.handleMouseMove(mouseMoveEvent)}
          onMouseUp={() => this.handleMouseUp()}
          onMouseLeave={() => this.handleMouseLeave()}>
          <div className="swipeItem-content" style={{ left: `${this.state.left}px` }}>
            {this.props.children}
          </div>
        </div>
      </li>
    )
  }
}
