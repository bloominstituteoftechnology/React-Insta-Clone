import React, { Component } from "react";
import "./CommentSection.css";

export default class CommentSection extends Component {
  render() {
    console.log("Comment Section Props", this.props);
    return (
      <div>
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
