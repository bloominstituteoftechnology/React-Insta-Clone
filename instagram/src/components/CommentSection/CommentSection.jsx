import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import Comment from "./Comment";
import "./CommentSection.css";

class CommentSection extends React.Component {
  state = {
    comments: this.props.post.comments,
    comment: ""
  };

  componentDidMount() {
    // TODO: add some logic to sort the local storage
  }

  setComments = () => {
    // TODO: add some logic to set comments in local storage
  };

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  // TODO: add a set comment call in a loop inside the submit comment handler
  submitComment = event => {
    // prevent the default operation
    event.preventDefault();
    // build the next comment to add
    const nextComment = { text: this.state.comment, username: 'tomtarpey' };
    // grab the state as slice
    const comments = this.state.comments.slice();
    // push the next comment to the comments array
    comments.push(nextComment);
    // set the state with the next comment and clear the comment value
    this.setState({ comments: comments, comment: '' });
  };

  render() {
    return (
      <div className="comment-wrapper">
        {this.state.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <div className="timestamp">
          {moment().startOf('day').fromNow(this.props.post.timestamp).toUpperCase()} AGO
        </div>
        <form onSubmit={this.submitComment}>
          <input
            placeholder="Add a comment..."
            type="text"
            value={this.state.comment}
            onChange={this.commentHandler}
          />
        </form>
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
