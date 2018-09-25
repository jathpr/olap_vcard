import React, { Component } from 'react'

class Scale extends Component {
    constructor() {
      super()
      this.renderChildren = this.renderChildren.bind(this)
    }
  
    renderChildren() {
      if (this.props.children)
        return React.Children.map(this.props.children, child => {
          const style = { transition: `transform ${this.props.time}s`, transform: `scale(${this.props.isShow ? 1 : 0})` }
          return React.cloneElement(child, { style: style })
        })
      return null
    }
  
    render() {
      return (
        <g>
          {this.renderChildren()}
        </g>
      )
    }
}

export default Scale;