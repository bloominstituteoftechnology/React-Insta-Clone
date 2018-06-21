import React from "react";
import styled from 'styled-components';
const CommentBox = styled.input`
  padding: 0 1%;
  margin-top: 24px;
  width: 100%;
  height: 52px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  font-size: 1.8rem;
  border: 1px lightgray solid;
  &::-webkit-input-placeholder {
      text-align: center;
  }
`;

const CommentAdder = props => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <CommentBox
        type="text"
        name={"comment" + props.index}
        className="comment-adder"
        placeholder="Add a comment..."
        autoComplete="off"
        onChange={props.changeCommentHandler}
        onKeyDown={e => {
          //Enter key
          if (e.keyCode === 13) {
            props.addCommentHandler(e, props.index);
          }
        }}
      />
    </form>
  );
};

export default CommentAdder;
