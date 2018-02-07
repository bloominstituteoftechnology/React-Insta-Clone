import React from 'react';

function CommentSection(props) {
  return <div><b>{props.commentInfo.username}</b> {props.commentInfo.text}</div>
}

export default CommentSection;