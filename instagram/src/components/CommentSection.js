import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };

  commentSubmit = e => {
    e.preventDefault();
    // build out our comment obj
    const newComment = { text: this.state.comment, username: "Leeroy Jenkins" };
    // clone our comments array
    const comments = this.state.comments.slice();
    // push obj into new clone
    comments.push(newComment);
    // set new clone as state... + reset our comment str
    this.setState({ comment: "", comments });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput
          submitHandler={this.commentSubmit}
          changeHandler={this.commentHandler}
          comment={this.state.comment}
        />
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

