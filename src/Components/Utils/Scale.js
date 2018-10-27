import React from 'react'

function Scale({ children, isShow }) {
  return (
    <g
      style={{
        transformOrigin: '50% 50%',
        transition: 'transform 0.5s',
        transform: `scale(${isShow ? 1 : 0})`,
      }}>
      {children}
    </g>
  )
}

export default Scale
