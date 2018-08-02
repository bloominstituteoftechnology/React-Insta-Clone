import React from 'react';
import styled from 'styled-components';

const CommentInputSection =  styled.section`
  width: 100%;
  border-top: 1px solid lightgray;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const CommentInputStyles =  styled.input`
  font-size: 16px;
  line-height: 2.5;
  border: none;
`;

const Ellipsis = styled.i`
  color: gray;
`;

const CommentInput = props => {
  return (
    <CommentInputSection>
    <form onSubmit={props.add} >
      <CommentInputStyles 
        onChange={props.change}
        value={props.comment}
        type="text"
        placeholder="Add comment..."
       />
    </form>
    <Ellipsis className="fas fa-ellipsis-h"></Ellipsis>
    </CommentInputSection>
  );
};

export default CommentInput;
