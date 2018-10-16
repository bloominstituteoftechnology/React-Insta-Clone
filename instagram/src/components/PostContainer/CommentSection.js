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
      <p>{props.likes} likes</p>
      This is where the Comment Section will be
    </div>
  )
}

export default CommentSection;