import React, { Component } from 'react';
import Comment from './Comment';
import './comment.css';


class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    }
  }

  render() {
    return (
      <div className="comment-container">
        <div className="comments">
          {this.state.comments.map(entry => <Comment comment={entry} key={entry.text} />)}
        </div>
        <div className="comment-form">
          <form>
            <input type="textarea" placeholder="Add a comment..."></input>
          </form>
        </div>
      </div>
    );
  }
}


export default CommentSection;