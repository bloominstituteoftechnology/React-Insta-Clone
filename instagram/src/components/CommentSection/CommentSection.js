import React from "react";
import Comment from "./Comment";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      comment: ""
    };
  }

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  addComment = () => {
    const newComment = { text: this.state.comment, username: "dchamorro" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
  };

  render() {
    const { likes } = this.props;
    const { comments } = this.state;
    return (
      <div>
        <i className="fa fa-heart" />
        <i className="fa fa-comment" />
        <span>{likes} likes</span>
        {comments.map((comment, i) => (
          <Comment username={comment.username} text={comment.text} key={i} />
        ))}
        <input
          type="text"
          placeholder="Add a Comment"
          onChange={this.commentHandler}
          value={this.state.comment}
        />
        <button onClick={this.addComment}>...</button>
      </div>
    );
  }
}

export default CommentSection;
