import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import styled from 'styled-components';

import './Comment.css';

// ------------------- STYLED COMPONENTS ---------------

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// ------------------- STYLED COMPONENTS ---------------

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: props.likes,
      comment: ''
    }
  }

  addComment = e => {
    let newComment = {
      username: 'BigPillow05',
      text: this.state.comment
    }
    this.setState({
      comments: [...this.state.comments, newComment],
      comment: ''
    })
    e.preventDefault();
  }

  handleTextInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <CommentSection>
        {this.state.comments.map((comment) => (
          <Comment profileObject={comment} key={comment.text} />
        ))} 
        <CommentInput handleTextInput={this.handleTextInput} addComment={this.addComment} commentValue={this.state.comment} />   
      </CommentSection>
    );
  }
} // class brace

export default CommentList;