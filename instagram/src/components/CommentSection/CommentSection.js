import React from "react";
import "./CommentSection.css";
import Comment from "../Comment/Comment.js";

class CommentSection extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="comment-section">
        <div className="comment-icons">
          <i class="far fa-heart" />
          <i class="far fa-comment" />
        </div>
        {this.props.comments.map(comment => (
          <Comment comment={comment} />
        ))}
        <input type="text" placeholder="add a comment" />
      </div>
    );
  }
}

// const CommentSection = props => {

//   return <p>hellooo</p>;
// };

export default CommentSection;
