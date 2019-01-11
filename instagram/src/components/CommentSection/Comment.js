import React from 'react';
import './comment.css';
import PostContainer from '../Styled/Reusables';
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
        <PostContainer>{commentsArray}</PostContainer>
    )
}

export default Comment;