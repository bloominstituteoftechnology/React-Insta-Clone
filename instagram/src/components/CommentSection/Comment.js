import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = props => {
    return(
        <div>
            <span className='user'>
            {props.comment.username} 
            </span>
            {' '}
            <span className='comment'>
            {props.comment.text}
            </span> 
        </div>
    )
};

Comment.propTypes = {
    Comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string 
    })
};

export default Comment;