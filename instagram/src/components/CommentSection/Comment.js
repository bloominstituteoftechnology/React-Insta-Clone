/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const usernameOnComment = css`
  color: #040e5c;
  font-weight: 600;
`;

const Comment = props => {
  return (
    <p>
      <span css={usernameOnComment}>@{props.username}</span> {props.text}
    </p>
  );
};

export default Comment;
