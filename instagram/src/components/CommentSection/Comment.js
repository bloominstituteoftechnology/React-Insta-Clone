import React from 'react';
import './comment.css';
import commentData from './commentData';


const Comment = props => {
    console.log(props)
    const comments = props.comment.comments;
    const commentsArray = comments.map( comment => (
        <ul key={comment.id} value={comment}>{comment.username} {comment.text}</ul> 
    ))
    return (
        <div>{commentsArray}</div>
    )
}

// const CommentSection = props => {
//     // const commentData = props.commentData;
//     const commentsArray = props.commentData.map( comment => (
//         comment.comments.map((commentInfo, index) =>
//         <ul key={index} value={commentInfo}>{commentInfo.username} {commentInfo.text}</ul> 
//         )
//     ))
//     return (
//         <div>{commentsArray}</div>
//     )
// }

export default Comment;