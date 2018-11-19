// @flow
import React, { useState } from 'react'
// import UncontrolledCollapse from 'reactstrap/lib/UncontrolledCollapse'
import Button from 'reactstrap/lib/Button'
import Link from 'react-router-dom/Link'
import Collapse from 'Components/Collapse/Collapse'

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
      <div className="col-12 col-md-2 m-auto" key={id}>
        <Link to={photo.fields.file.url} target="_self">
          <img width="100%" src={url} alt={photo.fields.description} />
        </Link>
      </div>
    )
  })

  return (
    <>
      <div className="row">
        <div className="col-12 text-center">{data.hint}</div>
      </div>
      <div className="row">{photos}</div>
      <div className="row">
        <div className="col-12 col-md-7 text-center">{data.biography}</div>
        <div className="col-12 col-md-4 p-2">
          <Button
            color="primary"
            onClick={() => setIsAudioOpen(!isAudioOpen)}
            style={{ marginBottom: '1rem', marginLeft: '25px' }}>
            {data.btnListAudio}
          </Button>
          <Button
            color="primary"
            onClick={() => setIsPressOpen(!isPressOpen)}
            style={{ marginBottom: '1rem', marginLeft: '35px' }}>
            {data.btnListPublications}
          </Button>
          <Collapse toggler={isAudioOpen}>
            <ul>{listAudio}</ul>
          </Collapse>
          <Collapse toggler={isPressOpen}>
            <ul>{listPublications}</ul>
          </Collapse>
        </div>
      </div>
    </>
  )
}

export default Biography
