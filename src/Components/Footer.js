import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    Тут могут быть контакты, ссылки на соц.сети, дублирование навигации и пр.
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2018 Olga P.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;