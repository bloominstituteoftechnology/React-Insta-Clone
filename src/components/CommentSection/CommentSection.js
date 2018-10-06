import React, {Component} from 'react';
import './CommentSection.css';

const CommentSection = (props)  =>  {

    return(
        <div>
            <div className="commentSection">
                {props.content.map(comment  =>  {
                    return <p className="comment-text"><strong>{comment.username}</strong> {comment.text}</p>
                })}
                <div className="timestamp">{props.timestamp}</div>
            </div>
            <input className="commentInput" placeholder="Add a comment..."></input>
        </div>
    )
}


export default CommentSection;