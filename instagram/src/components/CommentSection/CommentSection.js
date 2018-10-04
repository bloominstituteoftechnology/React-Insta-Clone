import React, { Component } from "react";
import "./CommentSection.css";
import Comment from "./Comment.js";

class CommentSection extends Component {
  render() {
    return (
      <>
        {this.props.comments.map(comment => {
          return (
            <Comment
              key={Math.random()}
              commentUser={comment.username}
              comment={comment.text}
            />
          );
        })}
      </>
    );
  }
}

export default CommentSection;
