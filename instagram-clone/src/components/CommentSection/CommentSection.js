import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(){
    super();
    this.state= {
      comments: [],
      newComment: ''
    };
  }

  componentDidMount() {
    this.setState({ comments: this.props.comments});
  }

  addComment = (event) => {
    event.preventDefault();
    const commentObj = {
      username: 'Adam',
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
    this.setState({ newComment: event.target.value});
  }

  render() {
    return (
      <div className="comment-section">
          {this.state.comments ? this.state.comments.map((comment, index) => (
          <div className="comment" key={index}>
            <div className="comment-user"><strong>{comment.username}</strong></div>
            <div className="comment-text">{comment.text}</div>
          </div>
        )) : null}
      <div className="comment-input">
        <input type="text" placeholder="..." value={this.state.newComment} onChange={this.handleCommentInput}/>
        <button type="sumbit" onClick={this.addComment}>Sumbit</button>
      </div> : null;
    </div>
    );
  }
}

export default CommentSection;