import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => <p><strong>{props.username}</strong> {props.text}</p>

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

Comment.defaultProps = {
    username: "Jorge_Osto"
}

export default Comment