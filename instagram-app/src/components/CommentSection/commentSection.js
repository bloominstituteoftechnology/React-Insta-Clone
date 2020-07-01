import React from 'react';
import Comment from './comment';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
    const {comment} = props; 
    
    return (
        <div><Comment comment={comment}/></div>
    )
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}


export default CommentSection;