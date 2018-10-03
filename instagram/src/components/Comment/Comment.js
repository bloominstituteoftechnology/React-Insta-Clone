import React from "react";
import PropTypes from "prop-types";

class Comment extends React.Component {
  render() {
    return (
      <div>
        {this.props.comment.username}:{this.props.comment.text}
      </div>
    );
  }
}

Comment.propTypes = {
  post: PropTypes.objectOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.objectOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      ).isRequired
    })
  ).isRequired
};

export default Comment;
