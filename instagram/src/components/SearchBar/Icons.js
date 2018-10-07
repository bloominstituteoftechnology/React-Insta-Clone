import React from 'react';
import './Icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = props => {
    return (
        <div className="icons">
            <FontAwesomeIcon className="linkIcon" icon={['fab', 'bandcamp']} size="3x" />
            <FontAwesomeIcon className="linkIcon" icon={['far', 'heart']} size="3x" />
            <FontAwesomeIcon className="linkIcon" icon={['far', 'user']} size="3x" />
        </div>
    );
}

export default Icons;