import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
    return(
        <div className="comment">
            <span className="username">{props.comment.username}</span>
            {props.comment.text}
        </div>
    )
}

Comment.propTyes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

export default Comment;