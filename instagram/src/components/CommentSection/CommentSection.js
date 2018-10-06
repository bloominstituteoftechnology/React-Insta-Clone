import React, { Component } from "react";
import "./CommentSection.css";
import Comment from "./Comment.js";
import PropTypes from "prop-types";
var moment = require("moment");

class CommentSection extends Component {
  constructor(props) {
    super();
    this.state = {
      comments: props.comments,
      input: ""
    };
  }
  submitHandler = event => {
    const newComment = {
      username: "dummyUser",
      text: this.state.input
    };
    if (event.key === "Enter") {
      this.setState({
        comments: [...this.state.comments, newComment],
        input: ""
      });
      event.target.value = "";
    }
  };
  changeHandler = event => {
    const value = event.target.value;
    this.setState({
      input: value
    });
  };

  onFocus = event => {
    event.target.value = "";
  };
  onBlur = event => {
    event.target.value = "Add a comment...";
  };

  render() {
    return (
      <>
        {this.state.comments.map(comment => {
          return (
            <Comment
              key={Math.random()}
              commentUser={comment.username}
              comment={comment.text}
            />
          );
        })}
        <div className="time">{moment(this.props.time).fromNow()}</div>
        <input
          type="text"
          className="add-comment"
          defaultValue="Add a comment..."
          onChange={this.changeHandler}
          onFocus={this.onFocus}
          onKeyDown={this.submitHandler}
          onBlur={this.onBlur}
        />
      </>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired
};

export default CommentSection;
