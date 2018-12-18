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

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }

  componenetWillUnmount() {
    this.setComments();
  }

  setComments = () => {};

  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };

  handleCommentSubmit = e => {
      e.preventDefault();
      if (this.state.comment.length > 0) {
      const newComment = { text: this.state.comment, username: "bmadrid" }; // make object to add
      const comments = this.state.comments.slice(); // make copy of state object to update
      console.log(newComment.text);
      comments.push(newComment); // add newComment object to the state array
      this.setState({ comments: comments, comment: "" }); // update State and blank out the state comment field
      this.setComments(); // save objects offline
      }
  };

  render() {
    return (
      <div className="comment-section-container">
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <div className="display-time">{this.props.dTime}</div>
        <CommentInput
          comment={this.state.comment}
          submitComment={this.handleCommentSubmit}
          changeComment={this.commentHandler}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  imageUrl: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  ),
  dTime: PropTypes.string
};

export default CommentSection;
