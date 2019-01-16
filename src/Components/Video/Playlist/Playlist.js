import React from 'react'
import style from './playlist.module.css'
import Thumbnail from './Thumbnail/Thumbnail'

function Playlist({ tracks, onTrackClick, onClick }) {
  const onVideoSelect = index => () => {
    onTrackClick(index)
    onClick()
  }

  return (
    <ul className={style.vido__list}>
      {tracks.map((track, index) => (
        <li key={track.id}>
          <Thumbnail track={track} onClick={onVideoSelect(index)} />
        </li>
      ))}
    </ul>
  )
}

export default Playlist
