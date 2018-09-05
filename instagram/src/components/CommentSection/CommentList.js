import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';

import './Comment.css';

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
      <div className='comment-section'>
        {this.state.comments.map((comment) => (
          <Comment profileObject={comment} key={comment.text} />
        ))} 
        <CommentInput handleTextInput={this.handleTextInput} addComment={this.addComment} commentValue={this.state.comment} />   
      </div>
    );
  }
} // class brace

export default CommentList;