import React from 'react';
// import PropTypes from 'prop-types';
// import Comment from '../Comment/Comment';

const CommentSection = props => {
    return (
        <div>
            <p>{props.comment.username}</p>
            <p>{props.comment.text}</p>
        </div>
    )

}

export default CommentSection;