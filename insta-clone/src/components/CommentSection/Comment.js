import React from 'react';
import PropTypes from 'prop-types'

const Comment = props => {
    return (
        <p>{props.comment.username} {props.comment.text}</p>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
}

export default Comment;