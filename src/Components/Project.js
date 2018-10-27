import React from 'react'
import Card from 'reactstrap/lib/Card'
import CardImg from 'reactstrap/lib/CardImg'
import CardText from 'reactstrap/lib/CardText'
import CardBody from 'reactstrap/lib/CardBody'
import CardTitle from 'reactstrap/lib/CardTitle'
import Link from 'react-router-dom/Link'

function Project({ data }) {
  const url = `https:${data.photo.fields.file.url}?fm=jpg&fl=progressive&w=400`
  const alt = data.photo.fields.description

  return (
    <Card>
      <Link to={`/projects/${data.urlName}`}>
        <CardBody>
          <CardTitle>{data.title}</CardTitle>
        </CardBody>
        <CardImg width="100%" src={url} alt={alt} />
        <CardBody>
          <CardText>{data.about}</CardText>
        </CardBody>
      </Link>
    </Card>
  )
}

export default Project
