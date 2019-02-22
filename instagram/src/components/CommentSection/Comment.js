import React from 'react';
import { CardText } from 'reactstrap';

const Comment = props => {
  return (
    <CardText>
      <strong>{props.comment.username}</strong> {props.comment.text}
    </CardText>
  );
};

export default Comment;
