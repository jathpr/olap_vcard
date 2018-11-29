import React, { Component } from 'react'

class Scale extends Component {
  constructor() {
    super()
    this.renderChildren = this.renderChildren.bind(this)
  }

  renderChildren() {
    const { children, time, isShow } = this.props
    if (children)
      return React.Children.map(children, child => {
        const style = {
          transition: `transform ${time}s`,
          transform: `scale(${isShow ? 1 : 0})`,
        }
        return React.cloneElement(child, { style })
      })
    return null
  }

  render() {
    return <g>{this.renderChildren()}</g>
  }
}

export default Scale
