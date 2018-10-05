import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./comments.css";

const CommentSection = props => {
  return (
    <div className={"comments"}>
      {props.comments.map(comment => (
        <div className={"comment"}>
          <div className={"commentusername"}>{comment.username}:</div>{" "}
          {comment.text}
        </div>
      ))}
    </div>
  );
};

export default CommentSection;