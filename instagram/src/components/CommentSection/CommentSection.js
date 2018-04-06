import React, { Component } from 'react';
import moment from 'moment';
import './CommentSection.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Bruce',
      comments: [],
      newCommentText: '',
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      time: this.props.time,
    });
  }

  handleNewComment = e => {
    this.setState({[e.target.name]: e.target.value})
  };

  submitNewComment = e => {
    if (e.keyCode === 13) {
      const { comments } = this.state;
      const newComment = {
        username: this.state.username,
        text: this.state.newCommentText
      }
      comments.push(newComment);
      this.setState({ comments, newCommentText: '' });
    }
  };

  render() {
    return <div>
        <div className="commentsContainer">
          {this.state.comments.map((c, index) => (
            <div key={`${c.username}'s comment ${index}`}>
              <p className="userInfo">
                <span className="username">{c.username}</span> {c.text}
              </p>
            </div>
          ))}
          <span className="timestamp">
            {moment(this.state.time, 'MMMM Do YYYY, h:mm:ss a')
              .fromNow()
              .toUpperCase()}
          </span>
        </div>
        <div className="commentInputContainer">
          <input type="text" name="newCommentText" value={this.state.newCommentText} onChange={this.handleNewComment} onKeyDown={this.submitNewComment} placeholder="Add a comment..." className="commentInput" />
          <i className="fas fa-ellipsis-h" />
        </div>
      </div>;
  }
}

export default CommentSection;