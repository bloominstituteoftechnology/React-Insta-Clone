import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => <p className="comment-instance"><span>{props.name}</span> {props.text}</p>

Comment.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
};

export default Comment;