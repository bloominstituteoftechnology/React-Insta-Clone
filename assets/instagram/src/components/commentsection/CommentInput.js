import React from 'react';
import styled from 'styled-components';

const CommentInputContainer = styled.div`
  margin-top: 2rem;
`;

const CommentInput = props => {
  return (
    <CommentInputContainer>
      <form onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
    </CommentInputContainer>
  );
};

export default CommentInput;