import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  };


  

  render() {
    return (
      <div>
        {this.state.comments.map(comment => {
          return (
          <div>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
          </div>
          )
        })}
      </div>
    );
  }
}

export default CommentSection;