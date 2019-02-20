import React from 'react';
import PropTypes from 'prop-types';

const Comment  = props => {
    return(
        <div>
            <span>{props.username} </span>
            <span>{props.text}</span>
        </div>
    )
}

Comment.propTypes= {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Comment;