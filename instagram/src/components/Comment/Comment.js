import React from "react";
import "./Comment.css";

class Comment extends React.Component {
  constructor() {
    super();
  }
  render() {
    {
      console.log(this.props);
    }
    return (
      <div className="comment">
        <p>username: {this.props.comment.username}</p>
        <p>text: {this.props.comment.text}</p>
      </div>
    );
  }
}
export default Comment;
