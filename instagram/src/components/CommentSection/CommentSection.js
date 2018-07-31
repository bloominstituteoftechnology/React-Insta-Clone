import React from 'react';
import Comment from './Comment.js';
import './CommentSection.css';

const CommentSection=prop=>{
    return (
        <div>
            {prop.data.map(e=><Comment data={e} key={e.text}/>)}
            <p className='time-stamp'>{prop.timestamp}</p>
            <div className='rule'></div>
            <div className='input-comment'>
            <input className='comment-input' type='text' placeholder='Add a comment...'/><i className="dot fas fa-ellipsis-h"></i>
            </div>
        </div>
    )
};

export default CommentSection;