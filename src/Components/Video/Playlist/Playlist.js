import React from 'react'
import style from './playlist.module.css'
import Carousel from '../../Carousel'
import Thumbnail from './Thumbnail/Thumbnail'

function Playlist({ tracks, onTrackClick, onClick }) {
  const onVideoSelect = index => () => {
    onTrackClick(index)
    onClick()
  }

  return (
    <>
      <div className={style.carousel__box}>
        <Carousel isPadding>
          {tracks.map((track, index) => (
            <li key={track.id}>
              <Thumbnail track={track} onClick={onVideoSelect(index)} />
            </li>
          ))}
        </Carousel>
      </div>
      <ul className={style.vido__list}>
        {tracks.map((track, index) => (
          <li key={track.id}>
            <Thumbnail track={track} onClick={onVideoSelect(index)} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Playlist
