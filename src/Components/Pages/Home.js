import React from 'react';
import { Card, CardTitle, CardBody, CardImg } from 'reactstrap';
import Player from '../Player';


const Home = (props) => {
    return (
        <div className="row">
            <div className="col-12 col-md-7 m-2">
                <Card>
                    <CardTitle>
                        Ольга Сергеевна Подгайская - композитор
                     </CardTitle>
                    <CardBody>
                        Краткая биография
                    </CardBody>
                </Card>
                <Player/>
            </div>
            <div className="col-12 col-md-4 m-2">
                <Card style={{width:"400px", float:"right"}}>
                    <CardImg width = "100%" src='assets/img/face_main_big.jpg' alt='фото Ольги Подгайской' />
                </Card>
            </div>
        </div>
    )
};

export default Home;