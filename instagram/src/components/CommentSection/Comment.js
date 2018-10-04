import React, { Component } from "react";
import "./CommentSection.css";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <p className="user">{this.props.commentUser}</p>
        <p className="comment-text">{this.props.comment}</p>
      </div>
    );
  }
}

export default Comment;
