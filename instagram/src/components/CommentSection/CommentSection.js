import React, { Component } from 'react';


class CommentSection extends Component {

  render() {
    return (
      <div>
        {this.props.comments.map((comment, index) => {
         return <div key={`${comment} ${index}`}><div>{comment.username}</div><p>{comment.text}</p></div>
        })};
      </div>
    )
  }
}

export default CommentSection;
