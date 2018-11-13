import React from "react";
import "./CommentSection";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentForm = props => {
  return (
    <form onSubmit={props.add}>
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
  );
};

export default CommentForm;
