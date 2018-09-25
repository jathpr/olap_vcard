import React from 'react'
import UncontrolledCollapse from 'reactstrap/lib/UncontrolledCollapse'
import Button from 'reactstrap/lib/Button'
import Link from 'react-router-dom/Link'

function Bio({ data }) {
  if (data) {
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
      <React.Fragment>
        <div className="row">
          <div className="col-12 text-center">{data.hint}</div>
        </div>
        <div className="row">{photos}</div>
        <div className="row">
          <div className="col-12 col-md-7 text-center">{data.biography}</div>
          <div className="col-12 col-md-4 p-2">
            <Button
              color="primary"
              id="songs_toggler"
              style={{ marginBottom: '1rem', marginLeft: '25px' }}>
              {data.btnListAudio}
            </Button>
            <Button
              color="primary"
              id="press_toggler"
              style={{ marginBottom: '1rem', marginLeft: '35px' }}>
              {data.btnListPublications}
            </Button>
            <UncontrolledCollapse toggler="#songs_toggler">
              <ul>{listAudio}</ul>
            </UncontrolledCollapse>
            <UncontrolledCollapse toggler="#press_toggler">
              <ul>{listPublications}</ul>
            </UncontrolledCollapse>
          </div>
        </div>
      </React.Fragment>
    )
  }
  return null
}

export default Bio
