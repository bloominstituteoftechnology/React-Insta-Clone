import React from 'react';
import './CommentSection.css';

const Comment = props => {
    return(
        <div>
            <div className="username_text">
                <ul>
                    <li>
                        {props.comment.username} <span>{props.comment.text}</span>
                    </li>
                </ul>
            </div>
            <div>
                {props.comment.timestamp}
            </div>
        </div>
    )
}

export default Comment;