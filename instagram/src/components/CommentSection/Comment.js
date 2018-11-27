import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
    return (
        <div className='comment'>
        I be a Comment
        <p className='text'>{props.comment.text}</p>{' '}
        <p className='user'>{props.comment.username}</p>
        </div>
    );
}

export default Comment;