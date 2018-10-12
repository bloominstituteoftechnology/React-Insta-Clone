import React from 'react';
import './Icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavIcons } from '../../Styles';

const Icons = props => {
    return (
        <NavIcons>
            <FontAwesomeIcon className="linkIcon" icon={['fab', 'bandcamp']} size="3x" />
            <FontAwesomeIcon className="linkIcon" icon={['far', 'heart']} size="3x" />
            <FontAwesomeIcon className="linkIcon" icon={['far', 'user']} size="3x" />
        </NavIcons>
    );
}

export default Icons;