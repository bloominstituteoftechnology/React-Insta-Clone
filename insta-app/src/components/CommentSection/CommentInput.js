import React from "react";
import PropTypes from "prop-types";
import CommentSection from "./CommentSection";
import Comment from "./Comment";

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div>
        <CommentSection />
        <Comment />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentInput;
