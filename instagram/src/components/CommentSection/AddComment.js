/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const styledAddComment = css`
  border: none;
  justify-self: flex-start;
  width: 500px;
  margin-bottom: 10px;
  margin-top: 3%;
  height: 20px;
  border-top: 1px solid lightgray;
`;

const AddComment = props => {
  return (
    <form onSubmit={e => props.addComment(e, props.username)}>
      <input
        type="text"
        name="inputText"
        placeholder="Add a Comment..."
        value={props.inputText}
        onChange={props.handleChange}
        css={styledAddComment}
      />
    </form>
  );
};

export default AddComment;
