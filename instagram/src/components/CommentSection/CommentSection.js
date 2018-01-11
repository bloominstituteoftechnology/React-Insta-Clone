import React, { Component } from 'react';
import './CommentSection.css';

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
    const comment = { username: 'Perry', text };
    comments.push(comment);
    this.setState({ comments, text: '' });
  }

  render() {
    return (
      <div className='CommentSection'>
        <ul className='CommentSection--ul'>
          {this.state.comments ?
            this.state.comments.map((comment, index) => {
              return <li key={index}>{comment.username}: {comment.text}</li>
            })
           : null }
        </ul>
        <input onChange={this.processNewComment.bind(this)} type="text" placeholder="Add a comment)" value={this.state.text} />
        <button onClick={this.addNewComment.bind(this)}>Comment</button>
      </div>
    );
  }
}

export default CommentSection;