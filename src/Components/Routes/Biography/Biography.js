// @flow
import React, { useState } from 'react'
// import UncontrolledCollapse from 'reactstrap/lib/UncontrolledCollapse'
import Link from 'react-router-dom/Link'
import Collapse from 'Components/Collapse/Collapse'
import style from './biography.module.css'

type Props = {
  data: {
    listAudio: string[],
    listPublications: string[],
    btnListAudio: string,
    btnListPublications: string,
    hint: string,
    biography: string,
    photos: Array<{
      fields: {
        file: {
          url: string,
        },
        title: string,
        description: string,
      },
      sys: {},
    }>,
    location: {
      lat: number,
      lon: number,
    },
  },
}

function Biography({ data }: Props) {
  const [isAudioOpen, setIsAudioOpen] = useState(false)
  const [isPressOpen, setIsPressOpen] = useState(true)

  const listAudio = data.listAudio.map(element => <li key={element}>{element}</li>)
  const listPublications = data.listPublications.map(element => <li key={element}>{element}</li>)

  // TODO index use. edite in prodaction
  const photos = data.photos.map((photo, index) => {
    const url = `https:${photo.fields.file.url}?fm=jpg&fl=progressive&w=400`
    const id = photo.fields.file.url + index
    return (
      <div key={id} className={style.image}>
        <Link to={photo.fields.file.url} target="_self">
          <img width="100%" src={url} alt={photo.fields.description} />
        </Link>
      </div>
    )
  })

  return (
    <>
      <div className={style.image__container}>{photos}</div>
      <div className={style.text__container}>{data.biography}</div>
      <div className={style.text__container}>
        <button type="button" onClick={() => setIsAudioOpen(!isAudioOpen)} className={style.button}>
          {data.btnListAudio}
        </button>
        <button type="button" onClick={() => setIsPressOpen(!isPressOpen)} className={style.button}>
          {data.btnListPublications}
        </button>
        <Collapse toggler={isAudioOpen}>
          <ul>{listAudio}</ul>
        </Collapse>
        <Collapse toggler={isPressOpen}>
          <ul>{listPublications}</ul>
        </Collapse>
      </div>
    </>
  )
}

export default Biography
