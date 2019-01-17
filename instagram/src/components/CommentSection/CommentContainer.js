/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { jsx, css } from "@emotion/core";

const commentWrapper = css`
  justify-items: flex-start;
  justify-self: flex-start;
  justify-content: flex-start;
  grid-template-rows: repeat(3, 1fr);
  display: grid;
  margin-left: 10px;
`;

const CommentContainer = props => {
  return (
    <div css={commentWrapper}>
      {props.data.comments.map(comment => (
        <Comment
          key={comment.username}
          username={comment.username}
          text={comment.text}
        />
      ))}
      <AddComment
        addComment={props.addComment}
        inputText={props.inputText}
        handleChange={props.handleChange}
        data={props.data}
        username={props.username}
      />
    </div>
  );
};

export default CommentContainer;
