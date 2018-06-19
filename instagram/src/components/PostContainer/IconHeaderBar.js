import React from 'react';
import './post-container.css';

const IconHeaderBar = (props) => {
    return (
             <div className = 'likes' >{props.likes} likes</div>
    );
};

export default IconHeaderBar;