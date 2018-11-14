import React from 'react';

const Comments = (props) =>{
  return (
    <li>
      <span>{props.comments.username}</span> {props.comments.text}
    </li>
  )
}

export default Comments;