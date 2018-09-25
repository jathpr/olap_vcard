import React, { Fragment } from 'react'
import Video from '../Video'

const Audio = ({ element }) => (
  <audio width="600" controls>
    <source src={`https:${element.fields.file.url}`} type="audio/mpeg" />
    <track kind="captions" />
    Your browser does not support the audio element.
  </audio>
)

function Music({ data }) {
  if (data) {
    const listAudio = data.songs.map(element => (
      <li key={element.sys.id}>
        {element.fields.title}
        <br />
        <Audio element={element} />
      </li>
    ))

    const playlist = [
      {
        src: `https:${data.video.fields.file.url}`,
        label: data.video.fields.title,
      },
    ].concat(
      data.videoList.map(video => ({
        src: video.fields.url,
        label: video.fields.title,
      }))
    )

    return (
      <Fragment>
        <div className="row">
          <div className="col-12 col-md-7 m-auto">
            <h2>{data.title}</h2>
            <ul>{listAudio}</ul>
          </div>
          <div className="col-12 col-md-5 m-auto">
            {data.video && <Video data={data.video} playlist={playlist} />}
          </div>
        </div>
      </Fragment>
    )
  }
  return null
}

export default Music
