import "./Comment.css";
import React, { Component } from "react";

class CommentSection extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        {this.props.comments.map(e => {
          return (
            <div>
              <h1>{e.username}</h1>
              <p>{e.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CommentSection;
