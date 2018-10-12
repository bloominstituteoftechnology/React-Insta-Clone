import React from 'react';
import './Links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LogoIcon, Divider, LogoH2 } from '../../Styles';

const Links = props => {
    return (
        <LogoIcon>
            <FontAwesomeIcon onClick={props.signOut} className="instagramLogo" icon={['fab', 'instagram']} />
             <Divider>|</Divider>
            <LogoH2>{props.titleLogo}</LogoH2>
        </LogoIcon>
    );
}

export default Links;