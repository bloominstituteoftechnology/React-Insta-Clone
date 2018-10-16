import React from 'react';
import Comment from './Comment';

const CommentsSection = props => {
  return (
  <div className="commentsSection">
    <div>
      {props.comments.map ( (comment, index) => {
        return (
          <div className="comments" key={index}>
              <Comment 
                username = {comment.username}
                text = {comment.text}
              />
          </div>
        )
      })}
    </div>

    addNewComment = (event, index) => {
    }

    <form className="addcomment">
      <input 
        type="text"
        name="entercomment"
        placeholder="add comment..."
        />
    </form>

  </div>  
  )
}

export default CommentsSection