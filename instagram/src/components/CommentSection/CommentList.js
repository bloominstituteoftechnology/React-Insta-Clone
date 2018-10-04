import React from 'react'
import Comment from './Comment';

export default (props) => {
  return (
    <div>
      {props.comments.map((comment) => <Comment comment={comment}/>)}
    </div>
  )
}