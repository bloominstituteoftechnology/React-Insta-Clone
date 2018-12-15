// import React from 'react';
// import './comment.css';
// import PropTypes from 'prop-types';

// const Comment = props => {
//     console.log(props)
//     const comments = props.comment.comments;
//     const commentsArray = comments.map( (comment, index) => (
//         <ul key={index} value={comment}><span className="bold">{comment.username}</span> {comment.text}</ul> 
//     ))
//     return (
//         <div>{commentsArray}</div>
//     )
// }

// const Comment = props => {
//     console.log(props)
//     const comments = props.post.comments;
//     const commentsArray = comments.map( (comment, index) => (
//         <ul key={index} value={comment}><span className="bold">{comment.username}</span> {comment.text}</ul> 
//     ))
//     return (
//         <div>
//       <span>{props.comment.username}</span>
//            {props.comment.text}
//         </div>
    
//     )
// }

// Comment.propTypes = {
//     comment: PropTypes.shape({
//         id: PropTypes.string,
//         comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
//     })
// }

// export default Comment;