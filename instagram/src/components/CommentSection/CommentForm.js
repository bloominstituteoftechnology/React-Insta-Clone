import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  border-top: 1px solid lightgray;
  width: 100%;
  display: flex;
  align-items: center;
  margin: .5rem 0;
`;

const StyledInput = styled.input`
  all: unset;
  flex-grow: 1;
  padding: 1rem 0;
`;

const StyledButton = styled.button`
  border: none;
  width: 4rem;
  font-weight: bold;
  font-size: 2rem;
`;

const CommentForm = props => {
  return (
    <StyledForm
      className="comment--form"
      onSubmit={(e) => props.handleInputSubmit(e)}>
      <StyledInput 
        type="text"
        name="text"
        onChange={(e) => props.handleInputChange(e)}
        placeholder="Add a comment..."
        value={props.commentText}/>
      <StyledButton>...</StyledButton>
    </StyledForm>
  );
}

CommentForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  commentText: PropTypes.string.isRequired,
  handleInputSubmit: PropTypes.func.isRequired,
}

export default CommentForm;