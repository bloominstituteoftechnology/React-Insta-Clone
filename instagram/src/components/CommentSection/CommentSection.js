import React from 'react';
import Comment from './Comment';
import styled from 'styled-components';

const CommentForm = styled.form`
  width: 100%;
  border: none;
  border-top: 1px solid black;
`
const CommentInput = styled.input`
  width: 100%;
  border: none;
`

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: ''
    };
  }

  commentHandler = e => {
   this.setState({ newComment: e.target.value });
  };

   handleCommentSubmit = e => {
     e.preventDefault();
     const newComment = { text: this.state.newComment, username: localStorage.getItem('username') };
     const comments = this.state.comments.slice();
     comments.push(newComment);
     this.setState({ comments, newComment: '' });
   };

  render() {
    return (
      <div>
        <div>{this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}</div>
        <div>{this.props.timestamp}</div>
        <CommentForm onSubmit={this.handleCommentSubmit}>
          <CommentInput type='text' placeholder='Add a comment...' onChange={this.commentHandler} value={this.state.newComment}/>
        </CommentForm>
      </div>
    );
  }
};

export default CommentSection;
