import React from 'react';
import PropTypes from 'prop-types'
import './CommentSection.css';

const Comment = props => {
    return <p className='comment'>
        <span className='commentUser'>{props.comment.username}</span> 
        <span className='commentText'>{props.comment.text}</span>
      </p>;
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
}

export default Comment;