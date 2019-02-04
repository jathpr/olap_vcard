// @flow

import React, { useState } from 'react'
import Video from '../../Video'
import style from './music.module.css'

type Props = {
  songList: Array<{
    src: {
      fields: {
        title: string,
        description: string,
        file: {
          url: string,
        },
      },
    },
    title: string,
    id: string,
    description: string,
    type: Array<{
      fields: {
        type: string,
      },
      sys: {
        id: string,
      },
    }>,
  }>,
  songsFilters: Array<{
    type: string,
    id: string,
  }>,
  curentSongTitle: string,
  selectTrack: Function,
}

// const Audio = ({ element }) => (
//   <audio width="600" controls>
//     <source src={`https:${element.fields.file.url}`} type="audio/mpeg" />
//     <track kind="captions" />
//     Your browser does not support the audio element.
//   </audio>
// )

function Music({ songList, songsFilters, selectTrack, curentSongTitle }: Props) {
  const [filterId, setFilter] = useState(null)

  const songsToList = songs =>
    songs.map(element => {
      const activeSongStyle =
        curentSongTitle && curentSongTitle === element.src.fields.title
          ? style.button__song_active
          : ''
      return (
        <li key={element.id} className={style.song}>
          <button
            type="button"
            className={`${style.button__song} ${activeSongStyle} button__empty`}
            onClick={selectTrack(element.src.fields.title)}>
            <span className={style.text__title}>{element.src.fields.title}</span>
            <br />
            <span className={style.text__description}>{element.src.fields.description}</span>
          </button>
        </li>
      )
    })

  const filterSongs = id =>
    songList.filter(song => song.type.filter(type => type.sys.id === id).length > 0)

  const filters = songsFilters.map(filter => (
    <button
      key={filter.id}
      type="button"
      className={`${style.button__filter} ${filter.id === filterId &&
        style.button__filter_active} button__empty button__link`}
      onClick={() => setFilter(filter.id)}>
      {filter.type}
    </button>
  ))

  const audio = songsToList(filterId ? filterSongs(filterId) : songList)

  return (
    <div className={style.container}>
      <div className={style.music_container}>
        <div className={style.filters__container}>
          {filters}
          <button
            type="button"
            disabled={!filterId}
            className={`${style.button__filter} button__empty button__link`}
            onClick={() => setFilter(null)}>
            &times;
          </button>
        </div>
        <ul>{audio}</ul>
      </div>
      <div className={style.video_container}>
        <Video />
      </div>
    </div>
  )
}

export default Music
