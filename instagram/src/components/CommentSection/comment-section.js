import React from 'react';
import PropTypes from "prop-types";
import './comment.css';

function Comment(props) {
    return (
        <div className="comment">
	  <p><span className="username">{props.comment.username}</span> <span>{props.comment.text}</span></p>
	</div>
    );
};

export default Comment;
