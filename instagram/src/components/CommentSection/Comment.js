/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const usernameOnComment = css`
  color: #040e5c;
  font-weight: 600;
`;

const textOnComment = css`
  color: black;
  font-weight: normal;
`;
const styledContainer = css`
  line-height: 2rem;
`;
const Comment = props => {
  return (
    <div css={styledContainer}>
      <span css={usernameOnComment}>
        @{props.username}
        <span css={textOnComment}>
          {"       "}
          {props.text}
        </span>
      </span>
    </div>
  );
};

export default Comment;
