import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="commentContainer">
            <h3>{props.username}</h3>
            <p>{props.text}</p>
        </div>
    );
};

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

Comment.defaultProps = {
    username: 'Username',
    text: 'comment text input by the user.'
}

export default Comment;