import React from 'react';
import { Row } from 'reactstrap';


const CommentSection = props => {
  return (
    <Row>
      <span style={{fontWeight: "bold" }}>{props.comment.username}</span>
      <span style={{marginLeft: "5px"}}>{props.comment.text}</span>
      {/* Used inline style tags instead of css because it was easier */}
    </Row>
  );
};

export default CommentSection; 