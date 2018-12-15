import React from 'react';
import './comment.css';
import PropTypes from 'prop-types';


// inside Container

const Comments = props => {
    const comments = props.post.comments;
    const commentsArray = comments.map( (comment, index) => (
        <ul className="commentPostUl"key={index} value={comment}><span className="bold">{comment.username}</span> {comment.text}</ul> 
    ))
    console.log(props)
    return (
        <div></div>
    )
}

export default Comment;