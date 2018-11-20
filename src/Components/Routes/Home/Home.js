// @flow

import React from 'react'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import CardImg from 'reactstrap/lib/CardImg'
import CardTitle from 'reactstrap/lib/CardTitle'

type Props = {
  data: {
    fewWords: string,
    name: string,
    shortBio: string,
    photo: {
      fields: {
        file: {
          url: string,
        },
        title: string,
        description: string,
      },
      sys: {},
    },
  },
}

function Home({ data }: Props) {
  if (data) {
    const url = `https:${data.photo.fields.file.url}?fm=jpg&fl=progressive&w=400`
    const alt = data.photo.fields.description
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-4 p-2 order-md-last">
            <Card>
              <CardImg width="100%" src={url} alt={alt} />
            </Card>
          </div>
          <div className="col-12 col-md-7 p-2">
            <Card>
              <CardTitle>
                {data.name} - {data.fewWords}
              </CardTitle>
              <CardBody>{data.shortBio}</CardBody>
            </Card>
          </div>
        </div>
      </React.Fragment>
    )
  }
  return null
}

export default Home
