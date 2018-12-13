// import React from 'react';
// import './comment.css';
// import PropTypes from 'prop-types';


// const Comment = props => {
//     console.log(props)
//     const comments = props.comment.comments;
//     const commentsArray = comments.map( (comment, index) => (
//         <ul key={index} value={comment}>{comment.username} {comment.text}</ul> 
//     ))
//     return (
//         <div>{commentsArray}</div>
//     )
// }

// Comment.propTypes = {
//     comment: PropTypes.shape({
//         id: PropTypes.string,
//         comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
//     })
// }

// export default Comment;