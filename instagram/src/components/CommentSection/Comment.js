import React from 'react';
import './CommentSection.css';
import PropTypes from "prop-types";

const Comment = props => {
    return (
        <div> 
            <span className="comment-user" >{props.comment.username} </span>
            <span> {props.comment.text}</span>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;