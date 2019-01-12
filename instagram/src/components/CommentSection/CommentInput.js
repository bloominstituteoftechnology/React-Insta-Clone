import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CommentContainer = styled.div`
  border-top: 1px solid lightgrey;
  margin: 10px auto 0;
  width: 98%;
  height: 45px;
  display: flex;
  align-items: center;
`;

const CommentForm = styled.form`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  height: 28px;
  border: 1px solid white;
`;

const CommentInput = props => {
  return (
    <CommentContainer>
      <CommentForm onSubmit={props.submitComment}>
        <Input
          type="text"
          value={props.comment}
          placeholder="Add a comment... "
          onChange={props.changeComment}
        />
      </CommentForm>
      <i className="fas fa-ellipsis-h" />
    </CommentContainer>
  );
};

CommentInput.propTypes = {
  comment: PropTypes.string,
  submitComment: PropTypes.func,
  changeComment: PropTypes.func
};

export default CommentInput;
