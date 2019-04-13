import React from 'react';
import "./InstagramLogo.css";

const InstragramLogo = (props) => {
    return (
        <React.Fragment>
            <div className="logo-container">
                <i className="fab fa-instagram" style={{width: '30px', height: '30px'}}></i>
                <span>|</span>
                <img src={props.logo} alt="Instagram"/>
            </div>
        </React.Fragment>
    );
};

export default InstragramLogo;