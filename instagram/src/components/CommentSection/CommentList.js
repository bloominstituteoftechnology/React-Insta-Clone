import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';

const CommentList = (props) => {

    return (
        <div className="comment-list-container">
            <Comment />
        </div>
    )
}

export default CommentList;