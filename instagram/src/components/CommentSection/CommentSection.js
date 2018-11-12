import React from "react";
import "./CommentSection.css";
import Comment from "./Comment";
import moment from "moment";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentSection = props => {
  return (
    <div className="comments">
      {props.comments.map(data => (
        <Comment
          user={data.username}
          text={data.text}
          key={data.username + data.text}
        />
      ))}
      <p className="time">
        {moment(props.time, "MMMM Do YYYY hh:mm:ss A").fromNow()}
      </p>
      <form onSubmit={props.addComment}>
        <InputGroup>
          <Input
            placeholder="Add a comment..."
            id="add-comment"
            value={props.comment}
            name={props.time}
            onChange={props.handleChange}
          />
          <InputGroupAddon addonType="append">
            <FontAwesomeIcon icon="ellipsis-h" size="xs" />
          </InputGroupAddon>
        </InputGroup>
      </form>
    </div>
  );
};

export default CommentSection;
