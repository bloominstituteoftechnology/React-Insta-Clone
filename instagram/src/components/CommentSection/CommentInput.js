import React from 'react';
import styled from 'styled-components';

const CommentForm = styled.form`
  position: relative;
`;

const NewComment = styled.input`
  border: none;
  outline: 0;
  font-size: 1.4rem;
  margin-top: 2rem;
  width: 100%;
`;

const CommentOptions = styled.div`
  position: absolute;
  top: 53%;
  left: 97%;
  font-size: 1.4rem;
`;

const CommentInput = ({ addNewComment, commentText, updateText, id }) => {
  return (
    <CommentForm onSubmit={e => addNewComment(e, id)}>
      <NewComment
        type="text"
        placeholder="Add a comment..."
        value={commentText}
        onChange={updateText}
      />
      <CommentOptions>
        <i className="fas fa-ellipsis-h" />
      </CommentOptions>
    </CommentForm>
  );
};

export default CommentInput;
