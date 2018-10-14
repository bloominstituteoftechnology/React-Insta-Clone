import React from 'react';
import styles from './Comment.css';


const Comment=(props)=>{
    let comment=props.comment;
    return(

        <p class="comment">
        <span>{comment.username}</span>
        &nbsp;
        {comment.text}
        </p>
    )

}

export default Comment;