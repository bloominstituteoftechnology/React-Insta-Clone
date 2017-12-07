import React, { Component } from 'react';

class CommentSsection from Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      newComment: ''
    };
  }

  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }

  addComment = (event) => {
    event.preventDefault();
    const commentObj = {
      username: 'Austin',
      text: this.state.newComment
    };

    const commentArray = this.state.comments;
    commentArray.push(commentObj);
    this.setState({
      comments: commentArray,
      newComment: ''
    });
  }

  handleCommentInput = (event) => {
    this.setState({ newComment: event.target.value });
  }

  render() {
    return (
      <div className="comment-section">
        {this.setState.comments.map((commment, i) => (
          <div className="comment" key={i}>
            <div className="comment-user"><b>{comment.username}</strong></div>
            <div className="comment-text">{comment.text}</div>
          </div>
        ))}
        <div className="comment-input">
          <input type="text" placeholder="..." value={this.setState.addComment} onChange={this.handleCommentInput}
          <button type="submit" onClick={this.addComment}>Submit</button>
        </div>
      </div>
    )
  }
}

export default CommentSsection;