import React, { Component } from 'react'
import withMediaProps from 'react-media-player/lib/decorators/with-media-props'
import Scale from '../Scale'

class PlayPause extends Component {
  handlePlayPause = () => {
    this.props.media.playPause()
  }

  render() {
    const {
      media: { isPlaying },
      className,
    } = this.props
    return (
      <svg
        style={{ flexShrink: 0 }}
        role="button"
        width="36px"
        height="36px"
        viewBox="0 0 36 36"
        className={className}
        onClick={this.handlePlayPause}>
        <circle fill="#373D3F" cx="18" cy="18" r="18" />
        <Scale time={0.5} isShow={isPlaying}>
          <g key="pause" style={{ transformOrigin: '0% 50%' }}>
            <rect x="12" y="11" fill="#CDD7DB" width="4" height="14" />
            <rect x="20" y="11" fill="#CDD7DB" width="4" height="14" />
          </g>
        </Scale>
        <Scale time={0.5} isShow={!isPlaying}>
          <polygon
            key="play"
            fill="#CDD7DB"
            points="14,11 26,18 14,25"
            style={{ transformOrigin: '100% 50%' }}
          />
        </Scale>
      </svg>
    )
  }
}

export default withMediaProps(PlayPause)
