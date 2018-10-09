import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.user.comments,
      timestamp: props.user.timestamp
    };
  }
  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <p className="timestamp">{this.state.timestamp}</p>
        <input className="add-comment" placeholder="Add a comment..." />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
