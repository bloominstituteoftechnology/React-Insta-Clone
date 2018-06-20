import React from 'react';
import PropTypes from 'prop-types';
import './Comments.css';

const Comment = props => {
    return (
        <div className='comment-text'>
            <strong onClick={() => props.deleteComment(props.index)} className='comment-name'>{props.comment.username} </strong>
            {props.comment.text}
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;