import React from 'react';
import '../CommentSection/CommentSection.css';
import {CardBody, CardText} from "reactstrap";

const CommentSection = props => {
  return(
    <div>
      {props.comments.map(comment => {
        return (
          <CardBody>
            <CardText>{comment.username}: {comment.text} </CardText> 
          </CardBody>
            )})}
    </div>
  )
}

export default CommentSection;