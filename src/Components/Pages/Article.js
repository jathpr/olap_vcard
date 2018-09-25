import React from 'react'

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: 'numeric',
}

const GOOGLE_EMBED = 'https://www.google.com/maps/embed/v1/place'
const API = process.env.REACT_APP_GOOGLE_EMBED_API
const ZOOM = 16

function Article({ data, locale }) {
  if (!data) return null

  const date = new Date(data.dateTime)
  const imgUrl = `https:${data.mainPhoto.fields.file.url}?fm=jpg&fl=progressive&w=800`
  const alt = data.mainPhoto.fields.description
  let location = null

  if (data.location) {
    const coords = {
      lat: data.location.lat,
      lng: data.location.lon,
    }
    const mapUrl = `${GOOGLE_EMBED}?key=${API}&q=${coords.lat},${coords.lng}&zoom=${ZOOM}`
    location = (
      <iframe
        title="eventPreview"
        width="100%"
        height="450"
        frameBorder="0"
        src={mapUrl}
        allowFullScreen
      />
    )
  }

  return (
    <div className="row">
      <div className="col-12 col-md-7 p-2">
        <h2>{data.title}</h2>
        <h3>{date.toLocaleString(locale, dateOptions)}</h3>
        <img width="100%" src={imgUrl} alt={alt} />
        <p>{data.fullText}</p>
      </div>
      <div className="col-12 col-md-5 p-2">
        <a href={data.link} target="blank">
          {data.linkTitle}
        </a>
        {location}
      </div>
    </div>
  )
}

export default Article
