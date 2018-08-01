import React from 'react';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let IconContainer = (props)=>{
   
    return (
        <div className="row iconRow">
            <FontAwesomeIcon id={props.id}  onClick={props.method} className="icon" icon={faHeart} />
            <FontAwesomeIcon className="icon" icon={faComment} />
        </div>
    );
    
}

export default IconContainer;