import React, { Component } from 'react';

const CommentInput = (props) => {
  console.log()
  return (
    <form onSubmit={props.onCommentAdd}>
      <input type="text" onChange={props.handleNewComment} value={props.newComment} placeholder="Add a comment..."/>
    </form>
  )
}

export default CommentInput;