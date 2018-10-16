import React from 'react';
import Comment from './Comment';

const CommentsSection = props => {
  return (
    <div>
      {props.comments.map ( comment => {
        return (
          <div>
            <div key={comment.index}>
              <Comment
                username = {comment.username}
                text = {comment.text}
              />
            </div>
          </div>
        )
      })}
    </div>
    
  )
}

export default CommentsSection