import React from 'react'
import './CommentSection.css'
import * as Icon from 'react-feather'
import {  InputGroup, InputGroupAddon, Input } from 'reactstrap';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: props.likes
    }
  }

  render() {
    return(
      <div className="commentSection">
        <div className="likeAndComment">
          <div className="likeAndCommentIcons">
            <Icon.Heart className="icons"/>
            <Icon.MessageCircle className="icons" />
          </div>  
          <p>{this.state.likes} likes</p>
        </div>
          <div>
            {this.state.comments.map( (comment, i) => {
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
}

export default CommentSection;