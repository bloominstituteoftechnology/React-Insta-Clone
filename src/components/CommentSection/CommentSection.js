import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: this.props.post.comments,
      comment: ""
    };
  }

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => (
          <Comment comment={comment} />
        ))}
        <input
          placeholder="Add a comment..."
          type="text"
          value={this.state.comment}
          onChange={this.commentHandler}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  postData: PropTypes.shape({
    comments: PropTypes.array,
    timestamp: PropTypes.string
  })
};

export default CommentSection;
