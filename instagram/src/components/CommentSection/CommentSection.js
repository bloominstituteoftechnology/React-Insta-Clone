import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./CommentSection.css";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: "",
      timestamp: props.timestamp,
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    
    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: "johndoe",
          text: this.state.newComment
        }
      ],
    });
  };
  handleChange = event => this.setState({ newComment: event.target.value });
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
        <p className="timestamp">
          {moment(this.state.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="comment"
            placeholder="Add a comment..."
            onChange={this.handleChange}
            className={"comment-input"}
          />
        </form>
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
