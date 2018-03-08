import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>{this.props.comments.map((comment, index) => {
        return (
          <div key={comment.username + index}>
            <p>
              <span>{comment.username}</span> <span>{comment.text}</span>
            </p>
          </div>
        );
      })}
      </div>
    )
  }
}

export default CommentSection
