import React from 'react';
import './comment-section.css';

const Comment = (props) => {
    return (
    
           <li className='comment'> <span className='user'>{props.username}</span> <span className='user-comment'>{props.text}</span> </li>
    
    );
};

export default Comment;