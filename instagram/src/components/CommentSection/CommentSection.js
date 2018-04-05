import React, { Component } from 'react';

export class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {console.log(this.props.comments)} // returns the comments as arrays
        <div>heart_|_comment</div>
        <div>{this.props.likes + ' likes'}</div>
        <div>
          {this.props.comments.map( (comment, index) => (
            <div key={comment.username + index}>{comment.username}{comment.text}</div>
          ))}
        </div>
      </div>
    )
  }
}
