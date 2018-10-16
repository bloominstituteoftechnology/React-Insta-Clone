import React from 'react'
import './CommentSection.css'
import * as Icon from 'react-feather'

const CommentSection = props => {
  return(
    <div className="commentSection">
      <div className="likeAndCommentIcons">
        <Icon.Heart />
        <Icon.MessageCircle />
      </div>
      <p>{props.post.likes} likes</p>
      {props.post.comments.map( (comment, i) => {
         return (
            <div className="comment">
               <h3>{comment.username}</h3>
               <p>{comment.text}</p>
            </div>
            )
        })}
    </div>
  )
}

export default CommentSection;