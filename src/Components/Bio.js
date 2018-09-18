import React from 'react';
import { Card, CardTitle, CardBody, CardImg } from 'reactstrap';

const Bio = (props) => {
    return (
        <div className="row">
            <div className="col-12 col-md-6 m-2">
                <Card>
                    <CardTitle>
                        Ольга Сергеевна Подгайская
        </CardTitle>
                    <CardBody>
                        (род. 21 марта 1981 года, город Караганда, Казахстан) — композитор, органист, преподаватель музыкальных дисциплин. С 1996 живёт в Белоруссии. Автор симфонических произведений, сочинений для солистов, хора и оркестра, инструментальных ансамблей, музыки для театра и кино.
        </CardBody>
                </Card>
            </div>
            <div className="col-12 col-md-5 m-2">
                <Card>
                    <CardImg width="100%" src='assets/img/face_main_big.jpg' alt='фото Ольги Подгайской' />
                </Card>
            </div>
        </div>
    )
};

export default Bio;