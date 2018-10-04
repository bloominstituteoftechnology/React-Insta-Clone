import React, { Component } from "react";
import "./CommentSection.css";

class Comment extends Component {
  render() {
    return (
      <>
        <p className="user">{this.props.commentUser}</p>
        <p className="comment-text">{this.props.comment}</p>
      </>
    );
  }
}

export default Comment;
