import React from 'react';
import { UncontrolledCollapse, Button } from 'reactstrap';

const Bio = (props) => {
    let photos = []
    for (let i = 0; i < 5; i++) {
        photos.push(
            <div className="col-12 col-md-2 m-auto" key={i}>
                <img width="100%" src='assets/img/face_main_big.jpg' alt='фото Ольги Подгайской' />
            </div>)
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 text-center">
                    можно сделать карусель (кнопки вправо/влево и возможность листать фото)
                </div>
            </div>
            <div className="row">
                {photos}
            </div>
            <div className="row">
                <div className="col-12 col-md-7 text-center">
                    Подробная биография
                </div>
                <div className="col-12 col-md-4 m-2">
                    <Button color="primary" id="songs_toggler" style={{ marginBottom: '1rem', marginLeft: '25px' }}>
                        Список произведений
                    </Button>
                    <Button color="primary" id="press_toggler" style={{ marginBottom: '1rem', marginLeft: '35px' }}>
                        Пресса
                    </Button>
                    <UncontrolledCollapse toggler="#songs_toggler">
                        <ul>
                            <li>название</li>
                            <li>название</li>
                            <li>название</li>
                            <li>название</li>
                        </ul>
                    </UncontrolledCollapse>
                   
                    <UncontrolledCollapse toggler="#press_toggler">
                        <ul>
                            <li>статья</li>
                            <li>статья</li>
                            <li>статья</li>
                            <li>статья</li>
                        </ul>
                    </UncontrolledCollapse>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Bio;