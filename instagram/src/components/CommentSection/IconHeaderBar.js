import React from 'react';
import './comment-section.css';
import Icon from '../SearchBar/Icon';

const IconHeaderBar = (props) => {
    return (
        <div>
        <Icon onClick = {props.addLike} icon = { < i className = "far fa-heart like-button"> </i>}/>
        <Icon icon={< i className= "far fa-comment chat-button"> </i>}/>
             <span className = 'likes' >{props.likes} likes</span>
             </div>
    );
};

export default IconHeaderBar;