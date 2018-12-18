import React from 'react';
import './comment.css';
// import PropTypes from 'prop-types';
// import CommentSection from "./CommentSection";


const Comment = props => {
    console.log(props)
    const comments = props.comments;
    const commentsArray = comments.map( (comment, index) => (
        <ul className="commentPostUl"key={index} value={comment}><span className="bold">{comment.username}</span> {comment.text}</ul> 
    ))
    console.log(props)
    return (
        <div>{commentsArray}</div>
    )
}

export default Comment;