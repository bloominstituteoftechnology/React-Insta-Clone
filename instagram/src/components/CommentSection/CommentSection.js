import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      comments: props.comments
    }
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  processNewComment = (event) => {
    this.setState({ text: event.target.value });
  };

  addNewComment = () => {
    const text = this.state.text;
    const comments = this.state.comments.slice();
    const comment = { username: 'Perry', text, key: this.state.comments.length };
    comments.push(comment);
    this.setState({ comments, text: '' });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.comments.map(comment => {
            return <li>{comment.username}: {comment.text}</li>
          })}
        </ul>
        <input onChange={this.processNewComment.bind(this)} type="text" placeholder="Add a comment)" value={this.state.newComment} />
        <button onClick={this.addNewComment.bind(this)}>Comment</button>
      </div>
    );
  }
}

export default CommentSection;