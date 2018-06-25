import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import "./CommentStyles.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div className="all-comments">
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput />
      </div>
    );
  }
}

export default CommentSection;
