import React from 'react'
import Scale from '../Scale'

function PlayPause({ isPlaying, className, playPauseAudio }) {
  return (
    <svg
      style={{ flexShrink: 0 }}
      role="button"
      width="36px"
      height="36px"
      viewBox="0 0 36 36"
      className={className}
      onClick={playPauseAudio}>
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

export default PlayPause
