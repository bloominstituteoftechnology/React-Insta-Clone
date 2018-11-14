import React from 'react';
import './comments.css';

const Comments = props => {
    return (
        <div className="comments">
        <p>{props.likes} likes</p>
        {props.comments.map((comment, i) => {
            return (
                <div className="commnent">
                <p className="commentName">{comment.username}</p>
                <p className="commentText">{comment.text}</p>

                </div>
            )
        })}
        </div>
    )
}

export default Comments;