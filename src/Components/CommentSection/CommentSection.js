
import React, { Component } from "react";
import "./CommentSection.scss";
import Comment from "../Comment/Comment";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      text: ''
    };
  }
};

  render() {
    return (
      <div className="commentSection">
        {this.state.comments.map(comment => (
          <Comment
            username={comment.username}
            text={comment.text}
            id={comment.id}
          />
        )
    )
  };
