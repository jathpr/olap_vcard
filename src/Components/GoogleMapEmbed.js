// @flow

import React from 'react'

const GOOGLE_EMBED = 'https://www.google.com/maps/embed/v1/place'
const API = process.env.REACT_APP_GOOGLE_EMBED_API
const ZOOM = 16

type Props = {
  lat: number,
  lng: number,
  className: string,
}

function GoogleMapEmbed({ lat, lng, className }: Props) {
  if (!API) return null
  const mapUrl = `${GOOGLE_EMBED}?key=${API}&q=${lat},${lng}&zoom=${ZOOM}`
  return (
    <iframe
      className={className}
      title="eventPreview"
      // width="100%"
      // height="450"
      frameBorder="0"
      src={mapUrl}
      allowFullScreen
    />
  )
}

export default GoogleMapEmbed
