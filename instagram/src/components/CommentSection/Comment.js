import React from 'react';
import './CommentSection.css';

const Comment = props => {
    return(
        <div className="user-comment">
            <div className="username_text">
                <ul>
                    <li>
                        <span className="username">{props.comment.username}</span> <span className="comment-text">{props.comment.text}</span>
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