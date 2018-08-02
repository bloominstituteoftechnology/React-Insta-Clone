import React from "react";
import "./Comment.css";
import styled from "styled-components";

const CommentThread = styled.div`
  display: flex;
  margin-top: 12px;
`;

const CommentName = styled.div`
  font-weight: bold;
`;

const Comment = prop => {
  return (
    <CommentThread>
      <CommentName>{prop.eye.username}</CommentName>
      <div className="comment-text">{prop.eye.text} </div>
    </CommentThread>
  );
};

export default Comment;
