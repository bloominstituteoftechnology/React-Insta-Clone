import React from 'react';
import './commentSection.css';
import PropTypes from 'prop-types';

const Comment = (props) => {
    return (
        <div className="comment">
            <p>{props.comment.username} {props.comment.text}</p>
        </div>
    )
}

Comment.propTypes = {
    commentObject: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;