import React, { Component } from 'react';
import styled from 'styled-components';

const CommentSectionFormElement = styled.form`
  border-top: 1px solid #e2e2e2;
`;

const CommentSectionFormInput = styled.input`
  width: 100%;
  padding: 15px 0;
  border: 0;
  outline: 0;
  font-size: 1.4rem;
`;

class CommentSectionForm extends Component {
  constructor(props) {
    super();
    this.state = {
      commentToAdd: ''
    }
  }

  onCommentChange = e => {
    this.setState({commentToAdd: e.target.value});
  }

  render() {
    return (
      <CommentSectionFormElement onSubmit={(e) => this.props.addNewComment(e, this.state.commentToAdd, this.props.postIndex)}>
        <CommentSectionFormInput type="text" placeholder="Add a comment..." value={this.state.commentToAdd} onChange={this.onCommentChange} />
      </CommentSectionFormElement>
    );
  }
}

export default CommentSectionForm;