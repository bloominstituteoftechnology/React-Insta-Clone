import React from 'react';
import Comment from './Comment';

const CommentsSection = props => {
  return (
  <div>
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

    <div>
      <input 
        type="text"
        name="entercomment"
        placeholder="add comment..."
        />
    </div>
  </div>  
  )
}

export default CommentsSection