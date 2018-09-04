import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
const Comment=prop=><p className='user-comment'><span>{prop.data.username}</span> {prop.data.text}</p>

Comment.propTypes={
    data: PropTypes.objectOf(PropTypes.string).isRequired
}


export default Comment;