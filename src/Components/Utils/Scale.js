import React, { Component } from 'react'

class Scale extends Component {
    render() {
        return (
            <g style={{
                transformOrigin: '50% 50%',
                transition: 'transform 0.5s',
                transform: `scale(${this.props.isShow ? 1 : 0})`
            }}>
                {this.props.children}
            </g>
        )
    }
}

export default Scale;