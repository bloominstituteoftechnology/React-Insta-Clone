import React from "react";
import Comment from "./Comment";

import styled from 'styled-components';

const CommentForm = styled.form`
  border-top: 1px solid lightgray;
`;

const CommentInput = styled.input`
  width: 100%
  padding: 10px 5%;
  border: none;
  outline: none;
  font-size: 1.7rem;
`;

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputComment: {},
    }
  }

  changeInput = event => {
    this.setState({inputComment:{
      text: event.target.value,
      username: 'horrifiedwooden'
    }})
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.addNewComment(this.state.inputComment, this.props.postIndex)
  }

  timePass = () => {
    const postDate = Date.parse(this.props.post.timestamp);
    const today = new Date();
    return postDate.toString(); 
  
  }

  render() {
    return(
      <div>
        {this.props.comments.map(comment => (
          <Comment 
            comment={comment} 
            key={comment.text}

          />
        ))}
        <p>{this.timePass()} hours</p>
        <CommentForm onSubmit={this.onSubmit}>
          <CommentInput 
            placeholder="Add a comment..."
            onChange={this.changeInput} 
          />
        </CommentForm>
      </div>
    )
  }
  
}

export default CommentSection;