// @flow

import React from 'react'
import Video from '../../Video'
import style from './music.module.css'

type Props = {
  cConcert: {
    title: string,
    songs: Array<{
      fields: {
        file: {
          url: string,
        },
        title: string,
        description: string,
      },
      sys: { id: string },
    }>,
  },
  cFilm: {
    title: string,
    video: {
      fields: {
        file: {
          url: string,
        },
        title: string,
        description: string,
      },
      sys: { id: string },
    },
    songs: Array<{
      fields: {
        file: {
          url: string,
        },
        title: string,
        description: string,
      },
      sys: { id: string },
    }>,
    videoList: Array<{
      fields: {
        file: {
          url: string,
        },
        title: string,
        description: string,
      },
      sys: { id: string },
    }>,
  },
  selectTrack: Function,
}

// const Audio = ({ element }) => (
//   <audio width="600" controls>
//     <source src={`https:${element.fields.file.url}`} type="audio/mpeg" />
//     <track kind="captions" />
//     Your browser does not support the audio element.
//   </audio>
// )

function Music({ cFilm, cConcert, selectTrack }: Props) {
  const songsToList = songs =>
    songs.map(element => (
      <li key={element.sys.id} className={style.song}>
        <button
          type="button"
          className={`${style.button} button__empty button__link`}
          onClick={selectTrack(element.fields.title)}>
          {element.fields.title}
        </button>
      </li>
    ))

  const filmAudio = songsToList(cFilm.songs)
  const concertAudio = songsToList(cConcert.songs)

  return (
    <div className={style.container}>
      <div className={style.music_container}>
        <h2 className={style.title}>{cConcert.title}</h2>
        <ul>{concertAudio}</ul>
        <h2 className={style.title}>{cFilm.title}</h2>
        <ul>{filmAudio}</ul>
      </div>
      <div className={style.video_container}>{cFilm.video && <Video />}</div>
    </div>
  )
}

export default Music
