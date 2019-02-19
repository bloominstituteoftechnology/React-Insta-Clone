import React from "react";
import Comment from "../Comment/Comment";
import PropTypes from "prop-types";
import moment from "moment";

class CommentSection extends React.Component {
  // Stopped using destructured props because I was getting a console warning: "Warning: CommentSection(...): When calling super() in `CommentSection`, make sure to pass up the same props that your component's constructor was passed."
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      timestamp: null
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      timestamp: this.props.timestamp
    });
  }

  render() {
    return (
      <section className="comments">
        {this.state.comments.map((comment, index) => (
          // Used index for key for now - Date.now() wasn't working for some reason:
          <Comment comment={comment} key={index} />
        ))}
        <h5 className="timestamp">
          {moment.duration(Date.now() - this.state.timestamp).humanize()}
        </h5>
        <input
          type="text"
          placeholder="Add a comment..."
          className="comment-input"
        />
      </section>
    );
  }
}

// Since I check the array contents in Comment.js, no need to check here:
CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentSection;
