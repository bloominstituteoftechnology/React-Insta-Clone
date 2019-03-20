import React, { Component } from "react";
import Comment from "./Comment.js";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";

const Time = styled.div`
  margin-left: 10px;
  color: silver;
`;
const AddComment = styled.input`
  padding: 10px 0px;
  border: none;
  border-top: 1px solid silver;
  color: silver;
  margin-top: 10px;
  width: 95%;
  font-size: 16px;
  margin-left: 10px;
`;
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
      username: `${localStorage.getItem("username")}`,
      text: this.state.input,
      timestamp: moment()
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
        })}{" "}
        <Time> {moment(this.props.time).fromNow()} </Time>{" "}
        <AddComment
          className="add-comment"
          type="text"
          defaultValue="Add a comment..."
          onChange={this.changeHandler}
          onFocus={this.onFocus}
          onKeyDown={this.submitHandler}
          onBlur={this.onBlur}
        />{" "}
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
