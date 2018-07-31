import React from 'react';
import './CommentSection.css';
const Comment=prop=>
    <p className='user-comment'><span>{prop.data.username}</span> {prop.data.text}</p>

export default Comment;