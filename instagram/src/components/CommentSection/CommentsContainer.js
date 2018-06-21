import React from "react";
import Comment from "./Comment";
import CommentAdder from "./CommentAdder";
import uuidv1 from "uuid";
import styled from "styled-components";
const CommentsWrapper = styled.div`
  margin-bottom: 12px;
`;
const CommentsContainer = props => {
  return (
    <CommentsWrapper>
      {props.comments.map((comment, id) => {
        return <Comment key={uuidv1()} comment={comment} />;
      })}

      <CommentAdder
        changeCommentHandler={props.changeCommentHandler}
        addCommentHandler={props.addCommentHandler}
        index={props.index}
      />
    </CommentsWrapper>
  );
};

export default CommentsContainer;
