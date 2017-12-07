import React, { Component } from 'react';

class CommentSection extends Component {
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

  addComment = (e) => {
    e.preventDefault();
    const commentObj = {
      username: 'Lawd Take Me',
      text: this.state.newComment
    };
    const commentArray = this.state.comments;
    commentArray.push(commentObj);
    this.setState({
      commnets: commentArray,
      newComment: ''
    });
  }

    handleCommentInput = (e) => {
      this.setState({ newComment: e.target.value });
    }

    render() {
      return (
        <div className="comment-section">
          {this.state.comments.map((comment, i) => (
            <div className="comment" key={i}>
              <div className="comment-user"><b>{comment.username}</b></div>
              <div className="comment-text">{comment.text}</div>
            </div>
          ))}
          <div className="comment-input">
            <input type="text" placeholder="..." value={this.state.newComment} onChange={this.handleCommentInput} />
            <button type="submit" onClick={this.addComment}>Submit</button>
          </div>
        </div>
      );
    }
}


export default CommentSection;