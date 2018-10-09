import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types'

const Comment = ({info}) => {
    return (
        <div className="comment">
            <h2>{info.username}</h2>
            <p>{info.text}</p>
        </div>
    );
}

export default Comment;

Comment.propTypes = {
    info: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }),
}
