import React from 'react';
import './comments.css';

const Comments = props => {
    return (
        <div className="comments">
        <p>{props.likes} likes</p>
        </div>
    )
}

export default Comments;