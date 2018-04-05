import React, { Component } from 'react';

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: []
    };
  }

  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }

  handleSubmitComment = () => {
    const { comments } = this.state;
    comments.push({
      username: 'The Dude',
      text: this.state.newComment
    });
    this.setState({ comments, newComment: '' });
  }

  handleAddComment = e => {
    this.setState({ [e.target.name] : e.target.value });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment, i) => <div key={i}>{comment.username} {comment.text}</div>)}

        <input
          type="text"
          name="newComment"
          value={this.state.newComment}
          placeholder="add comment"
          onChange={this.handleAddComment}
        />
        <button onClick={this.handleSubmitComment}>Add Comment</button>
        <div>{this.props.time}</div>
      </div>
    );
  }
}

export default CommentSection;
