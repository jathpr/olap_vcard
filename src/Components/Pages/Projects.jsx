import React from 'react';

//project imports
import Card from 'reactstrap/lib/Card';
import CardImg from 'reactstrap/lib/CardImg';
import CardText from 'reactstrap/lib/CardText';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import Link from 'react-router-dom/Link';

const Projects = (props) => {
    if (props.data) {
        return <div className="row">
            {props.data.map(project =>
                (
                    <div className="col-12 col-lg-6 m-auto p-3 pl-5 pr-5" key={project.id}>
                        <Project data={project} locale={props.locale} />
                    </div>)
            )}
        </div>
    }
    return null
};

export default Projects;

const Project = (props) => {
    const url = `https:${props.data.photo.fields.file.url}?fm=jpg&fl=progressive&w=400`;
    const alt = props.data.photo.fields.description;

    return (
        <Card>
            <Link to={`/projects/${props.data.urlName}`}>
                <CardBody>
                    <CardTitle>{props.data.title}</CardTitle>
                </CardBody>
                <CardImg width="100%" src={url} alt={alt} />
                <CardBody>
                    <CardText>{props.data.about}</CardText>
                </CardBody>
            </Link>
        </Card>
    )
}