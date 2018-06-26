import React from "react";
import Comment from "./Comment";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
  }

  render() {
    const { likes } = this.props;
    const { comments } = this.state;
    return (
      <div>
        <span>{likes} likes</span>
        {comments.map((comment, i) => (
          <Comment username={comment.username} text={comment.text} key={i} />
        ))}
      </div>
    );
  }
}

export default CommentSection;
