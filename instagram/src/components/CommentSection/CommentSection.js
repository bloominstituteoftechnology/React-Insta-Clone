import React from "react";
import "./CommentSection.css";
import Comment from "../Comment/Comment.js";

class CommentSection extends React.Component {
  constructor() {
    super();
  }
  render() {
    {
      console.log(this.props);
    }
    return (
      <div className="comment-section">
        <h2>comments:</h2>
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
