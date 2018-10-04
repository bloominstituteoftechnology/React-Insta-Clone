import React from 'react';
import styles from './commentsection.css';

const Comment = (props) =>{
    return(
        <div className = "comment">
            <span className = "username">{props.username}</span>{props.text}
        </div>
    )
}

export default Comment;