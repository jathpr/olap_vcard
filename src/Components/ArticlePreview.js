import React from 'react';
import Card from 'reactstrap/lib/Card';
import CardImg from 'reactstrap/lib/CardImg';
import CardText from 'reactstrap/lib/CardText';
import CardBody from 'reactstrap/lib/CardBody';
import CardLink from 'reactstrap/lib/CardLink';
import CardTitle from 'reactstrap/lib/CardTitle';
import CardSubtitle from 'reactstrap/lib/CardSubtitle';
import Link from 'react-router-dom/Link';

const Article = (props) => {
    const date = new Date(props.data.dateTime)
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: 'numeric' };
    const url = `https:${props.data.mainPhoto.fields.file.url}?fm=jpg&fl=progressive&w=300`;
    const alt = props.data.mainPhoto.fields.description;

    return (
        <Card>
            <Link to={`/articles/${props.data.urlName}`}>
                <CardBody>
                    <CardTitle>{props.data.title}</CardTitle>
                    <CardSubtitle>{date.toLocaleString(props.locale, dateOptions)}</CardSubtitle>
                </CardBody>
                <CardImg width="100%" src={url} alt={alt} />
                <CardBody>
                    <CardText>{props.data.aboutShort}</CardText>
                </CardBody>
            </Link>
            <CardLink href={props.data.link} target='blank'>{props.data.linkTitle}</CardLink>
        </Card>
    )
}

export default Article;