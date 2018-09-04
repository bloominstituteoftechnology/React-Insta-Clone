import React from 'react';
import PropTypes from 'prop-types';

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string

}

function Comment(props) {
    return (
    <div>
        <p>{props.username}: {props.text}</p>
    </div>
    );
}

export default Comment;