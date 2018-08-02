import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";
import "./CommentSection.css";

const CommentInputForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
`;

const CommentTodoForm = styled.form``;

const CommentInputStyledComponent = styled.input`
  padding: 1rem 15rem 1rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  border: none;
  color: #aa9999;
`;

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      handleSubmit: props.handleSubmit,
      handleInputChange: props.handleInputChange
    };
  }

  render() {
    return (
      <CommentInputForm className="commentInputForm">
        <CommentTodoForm
          onSubmit={this.state.handleSubmit}
          className="commentTodoForm"
        >
          <CommentInputStyledComponent
            className="commentInput"
            placeholder="Add a comment..."
            onChange={this.state.handleInputChange}
          />
        </CommentTodoForm>
      </CommentInputForm>
    );
  }
}

export default CommentInput;
