import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: ""
    };
  }

  commentHandler = e => {
    this.setState({ newComment: e.target.value });
  };

  commentSubmit = e => {
    e.preventDefault();
    // build out our comment obj
    const newComments = { text: this.state.newComment, username: "Leeroy Jenkins" };
    // clone our comments array
    const comments = this.state.comments.slice();
    // push obj into new clone
    comments.push(newComments);
    // set new clone as state... + reset our comment str
    this.setState({ newComment: "", comments });
  };


  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput
          submitHandler={this.commentSubmit}
          changeHandler={this.commentHandler}
          newComment={this.state.newComment}
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

