import React from 'react';
// import PropTypes from 'prop-types';
import './CommentSection.css';


const Comments= (props) => {
  console.log(props)
  return (
    <div className="commentsListDiv">
      <h4>{props.comment.username} <span>{props.comment.text}</span></h4>
    </div>
  )
}


export default Comments;