import React from 'react'
import './CommentSection.css'
import * as Icon from 'react-feather'
import {  InputGroup, InputGroupAddon, Input } from 'reactstrap';

const CommentSection = props => {
  return(
    <div className="commentSection">
      <div className="likeAndComment">
        <div className="likeAndCommentIcons">
          <Icon.Heart className="icons"/>
          <Icon.MessageCircle className="icons" />
        </div>  
        <p>{props.post.likes} likes</p>
      </div>
        <div>
          {props.post.comments.map( (comment, i) => {
             return (
                <div className="comment">
                   <h3>{comment.username}</h3>
                   <p>{comment.text}</p>
                </div>
                )
            })}
        </div> 
        <InputGroup>
          <Input placeholder="Add a comment..." />
          <InputGroupAddon addonType="append">...</InputGroupAddon>
      </InputGroup>   
    </div>
  )
}

export default CommentSection;