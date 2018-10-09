import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment, input) => (
          <Comment key={input} comment={comment} />
        ))}
        <CommentInput />
      </div>
    );
  }
}

CommentSection.PropTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.sting })
  )
};

export default CommentSection;
