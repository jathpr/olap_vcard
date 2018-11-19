// @flow

import * as React from 'react'
import GoogleMapEmbed from '../GoogleMapEmbed'
import dateToLocale from '../Utils/dateToLocale'

type Props = {
  data: {
    title: string,
    fullText: string,
    link: string,
    linkTitle: string,
    dateTime: string,
    mainPhoto: {
      fields: {
        file: {
          url: string,
        },
        title: string,
      },
      sys: {},
    },
    location: {
      lat: number,
      lon: number,
    },
  },
  locale: string,
}

function Article({ data, locale }: Props) {
  if (!data) return null

  const imgUrl = `https:${data.mainPhoto.fields.file.url}?fm=jpg&fl=progressive&w=800`
  const alt = data.mainPhoto.fields.title

  return (
    <div className="row">
      <div className="col-12 col-md-7 p-2">
        <h2>{data.title}</h2>
        <h3>{dateToLocale(data.dateTime, locale)}</h3>
        <img width="100%" src={imgUrl} alt={alt} />
        <p>{data.fullText}</p>
      </div>
      <div className="col-12 col-md-5 p-2">
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          {data.linkTitle}
        </a>
        {data.location && <GoogleMapEmbed lat={data.location.lat} lng={data.location.lon} />}
      </div>
    </div>
  )
}

export default Article
