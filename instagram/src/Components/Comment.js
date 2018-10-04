import React from 'react';
import './comment.css';

/*
// Comments info
comments: [
    {
      username
      text
*/

const Comment = (props) => {
    return (
        <div className='comment-container'>
            <p>{props.username}</p>
            <p>{props.text}</p>
        </div>
    )
}

export default Comment;