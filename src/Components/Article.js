import React from 'react'
import Card from 'reactstrap/lib/Card'
import CardImg from 'reactstrap/lib/CardImg'
import CardText from 'reactstrap/lib/CardText'
import CardBody from 'reactstrap/lib/CardBody'
import CardLink from 'reactstrap/lib/CardLink'
import CardTitle from 'reactstrap/lib/CardTitle'
import CardSubtitle from 'reactstrap/lib/CardSubtitle'
import Link from 'react-router-dom/Link'

function Article({ data, locale }) {
  const date = new Date(data.dateTime)
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: 'numeric',
  }
  const url = `https:${data.mainPhoto.fields.file.url}?fm=jpg&fl=progressive&w=300`
  const alt = data.mainPhoto.fields.description

  return (
    <Card>
      <Link to={`/articles/${data.urlName}`}>
        <CardBody>
          <CardTitle>{data.title}</CardTitle>
          <CardSubtitle>{date.toLocaleString(locale, dateOptions)}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={url} alt={alt} />
        <CardBody>
          <CardText>{data.aboutShort}</CardText>
        </CardBody>
      </Link>
      <CardLink href={data.link} target="blank">
        {data.linkTitle}
      </CardLink>
    </Card>
  )
}

export default Article
