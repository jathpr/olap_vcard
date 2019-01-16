import React from 'react'
import getLink from '../../../../utils/getVideoImageLink'
import { ReactComponent as Play } from './PlayButton.svg'
import style from './thumbnail.module.css'

function Thumbnail({ track, onClick }) {
  return (
    <button className={`${style.container} button__empty`} type="button" onClick={onClick}>
      <img src={getLink(track)} alt="frame from video" width={220} className={style.image} />
      <span className={style.title}>
        <Play className={style.play} />
      </span>
      {/* <span className={style.title}>{track.label}</span> */}
    </button>
  )
}

export default Thumbnail
