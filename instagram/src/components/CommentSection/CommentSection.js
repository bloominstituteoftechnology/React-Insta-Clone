import React from 'react';
import './CommentSection.css';

const CommentSection = (props)  =>  {
    return(
        <div>
            <div className="commentSection">
                {props.content.map(comment    =>  {
                    return <p><strong>{comment.username}</strong> {comment.text}</p>
                })}
            </div>
            <input className="commentInput" placeholder="Add a comment..."></input>
        </div>
    )
}

export default CommentSection;
