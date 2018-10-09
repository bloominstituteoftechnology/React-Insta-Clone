import React, { Component } from "react";
import PropTypes from "prop-types";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>
              <span className="username">{comment.username}</span>
              {comment.text}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
