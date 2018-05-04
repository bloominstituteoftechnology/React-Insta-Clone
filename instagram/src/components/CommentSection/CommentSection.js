import React from 'react';
import { Row } from 'reactstrap';

const CommentSection = props => {
  return (
    <Row>
      <span className="comment-username">{props.comment.username}</span>
      <span className="comment-text">{props.comment.text}</span>
    </Row>
  );
};

export default CommentSection;