import React from 'react';
import { Row } from 'reactstrap';
import './CommentSection.css';


const CommentSection = props => {
  return (
    <Row>
      <span className="Comment-username">{props.comment.username}</span>
      <span className="Comment-text">{props.comment.text}</span>
    </Row>
  );
};

export default CommentSection;