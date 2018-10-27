import React from 'react'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import CardImg from 'reactstrap/lib/CardImg'
import CardTitle from 'reactstrap/lib/CardTitle'

function Home({ data }) {
  if (data) {
    const url = `https:${data.photo.fields.file.url}?fm=jpg&fl=progressive&w=400`
    const alt = data.photo.fields.description
    return (
      <div className="row">
        <div className="col-12 col-md-7 p-2">
          <Card>
            <CardTitle>
              {data.name} - {data.fewWords}
            </CardTitle>
            <CardBody>{data.shortBio}</CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-4 p-2">
          <Card>
            <CardImg width="100%" src={url} alt={alt} />
          </Card>
        </div>
      </div>
    )
  }
  return null
}

export default Home
