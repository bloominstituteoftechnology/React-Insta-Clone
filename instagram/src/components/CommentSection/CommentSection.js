import React from 'react';
import PropTypes from "prop-types";
import './CommentSection.css';

 function Comment(props) {
    return (
        <div className = 'comment'>
	         <p><span className = 'comment-data'>{props.comment.username}</span> <span>{props.comment.text}</span></p>
	      </div>
    );
};

export default CommentSection;
