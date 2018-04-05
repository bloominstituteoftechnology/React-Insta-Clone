import React, { Component } from 'react';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: ''
    };
  }

  handleCommentInput = event => {
    this.setState({ newComment: event.target.value });
  };

  addComment = event => {
    event.preventDefault();
    const commentsList = this.state.comments;
    commentsList.push(this.state.newComment);
    this.setState({
      newComment: '',
      comments: commentsList
    });
  };

  render() {
    return (
      <div className="Comment">
        {this.props.comments.map(comment => {
          return (
            <div>
              <p>
                {comment.username} {comment.text}
              </p>
            </div>
          );
        })}
        <div>
          {this.state.comments.map((comment, i) => (
            <Comment key={i} thing={comment} />
          ))}
          <form onSubmit={this.addComment}>
            <input
              type="text"
              onChange={this.handleCommentInput}
              placeholder="Add a new comment"
              value={this.state.newComment}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CommentSection;