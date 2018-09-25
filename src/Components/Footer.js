import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    {props.data.general}
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>{props.data.copyright}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;