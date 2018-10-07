import React from 'react';
import './Links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Links = props => {
    return (
        <div className="logo">
            <FontAwesomeIcon className="instagramLogo" icon={['fab', 'instagram']} />
             <div className="divider">|</div>
            <h2 className="linkH2">{props.titleLogo}</h2>
        </div>
    );
}

export default Links;