import React, { Component } from 'react';
// import './CommentSection.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  render() {
    return (
      <div className="Comment-Wrapper">
        {this.props.comments.map(comment => {
          return (
            <div>
              <p>{comment.username}</p>
              <p>{comment.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CommentSection;
