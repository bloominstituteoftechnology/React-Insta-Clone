import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection=prop=>{
    return (
        <div>
            {prop.comments.map(e=><Comment data={e} key={e.text}/>)}
            <p className='time-stamp'>{prop.timestamp}</p>
            <div className='rule'></div>
            <div className='input-comment'>
            <input className='comment-input' type='text' placeholder='Add a comment...'/><i className="dot fas fa-ellipsis-h"></i>
            </div>
        </div>
    )
};
CommentSection.propTypes={
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    timestamp: PropTypes.string.isRequired
}
export default CommentSection;