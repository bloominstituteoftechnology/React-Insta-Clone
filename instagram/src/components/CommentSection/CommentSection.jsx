import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import "./CommentSection.css";

class CommentSection extends React.Component {
  state = {
    comments: this.props.post.comments,
    comment: ""
  };

  commentHandler = event => {};

  submitComment = event => {};

  render() {
    return (
      <div className="comment-wrapper">
        {this.state.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <form onSubmit={this.submitComment}>
          <input
            placeholder="Add a comment..."
            type="text"
            value={this.state.comment}
            onChange={this.commentHandler}
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  postData: PropTypes.shape({
    comments: PropTypes.array
  })
};

export default CommentSection;
