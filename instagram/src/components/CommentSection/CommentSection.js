import React from 'react';
import Comment from './Comment.js';
import CommentInput from './CommentInput.js';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: '',
    };
  }

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  }

  handleCommentSub = event => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: 'leelichtsinn' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
  }

  render() {
    return (
      <div className='comment-section'>
        {this.state.comments.map((comment, i) => {
          return <Comment key={i} comment={comment} />
        })}
        <CommentInput
          comment={this.state.comment}
          subComment={this.handleCommentSub}
          changeComment={this.commentHandler}
        />
      </div>
    );
  }
}

export default CommentSection;
