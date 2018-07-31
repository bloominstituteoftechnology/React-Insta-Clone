import React from 'react';
// import PropTypes from 'prop-types';
import './CommentSection.css';


const CommentInput= (props) => {
  console.log(props)
  return (
    <div className="commentInputForm">
      <form >
        <input className="commentInput" placeholder="Add a comment..." />
      </form>
    </div>
  )
}


export default CommentInput;