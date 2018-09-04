import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import Comment from "./Comment";
import "./CommentSection.css";

class CommentSection extends React.Component {
  state = {
    comments: this.props.post.comments,
    comment: "",
    username: "tomtarpey"
  };

  componentDidMount() {
    const id = this.props.post.imageUrl;
    if (window.localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(window.localStorage.getItem(id))
      });
    } else {
      this.setComments();
    }
  }

  setComments = () => {
    // Set the local storage items to keep the comments intact
    window.localStorage.setItem(
      this.props.post.imageUrl,
      JSON.stringify(this.state.comments)
    );

  };

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  submitComment = event => {
    // prevent the default operation
    event.preventDefault();
    // build the next comment to add
    const nextComment = { text: this.state.comment, username: this.state.username };
    // grab the state as slice
    const comments = this.state.comments.slice();
    // push the next comment to the comments array
    comments.push(nextComment);
    // set the state with the next comment and clear the comment value
    this.setState({ comments: comments, comment: '' });
    // add a loop to update the local storage
    setTimeout(() => {
      this.setComments();
    }, 600);
  };

  // TODO: might add a way to delete comment if i get time
  deleteComment = event => { console.log("TODO: fill in some logic for this event method");
};
  render() {
    return (
      <div className="comment-wrapper">
        {this.state.comments.map((comment, index) => (
          <Comment key={index} comment={comment} delComment={this.deleteComment} />
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
