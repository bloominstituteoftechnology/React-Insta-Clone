import React from "react";
import "./Comment.css";

class Comment extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="comment">
        <p>
          <span className="comment-username">
            {this.props.comment.username}{" "}
          </span>
          {this.props.comment.text}
        </p>
        <p />
      </div>
    );
  }
}
export default Comment;
