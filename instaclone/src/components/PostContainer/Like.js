import React from 'react';
import './post-container.css';

const Like = props =>{
return(
    <div className="like-comment" onClick={props.incrementLike}>
    <i className="far fa-comment" />
    <i className="far fa-heart" />
    <div className="like">{props.likes}</div>
    </div>)}

    export default Like;