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
    const { todos } = this.state;
    todos.push(this.state.newComment);
    this.setState({ todos, newComment: '' });
  }

  handleAddComment = e => {
    this.setState({ [e.target.name] : e.target.value });
  }

  render() {
    return (
      <div>
        {this.state.comments.map(comment => <div>{comment.username} {comment.text}</div>)}

        <input
          type="text"
          name="newComment"
          value={this.state.newComment}
          placeholder="add todo"
          onChange={this.handleAddComment}
        />
        <button onClick={this.handleSubmitComment}>Add Comment</button>
      </div>
    );
  }
}

export default CommentSection;
