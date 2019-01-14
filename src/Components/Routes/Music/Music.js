// @flow

import React, { useState } from 'react'
import Video from '../../Video'
import style from './music.module.css'

type Props = {
  songList: Array<{
    src: {
      fields: {
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
  selectTrack: Function,
}

// const Audio = ({ element }) => (
//   <audio width="600" controls>
//     <source src={`https:${element.fields.file.url}`} type="audio/mpeg" />
//     <track kind="captions" />
//     Your browser does not support the audio element.
//   </audio>
// )

function Music({ songList, songsFilters, selectTrack }: Props) {
  const [filterId, setFilter] = useState(null)

  const songsToList = songs =>
    songs.map(element => (
      <li key={element.id} className={style.song}>
        <button
          type="button"
          className={`${style.button__song} button__empty`}
          onClick={selectTrack(element.title)}>
          {element.title}
        </button>
      </li>
    ))

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
