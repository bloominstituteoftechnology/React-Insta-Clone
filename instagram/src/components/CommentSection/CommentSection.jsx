import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Comment from "./Comment";
import styled from "styled-components";
import "./CommentSection.css";

const CommentInput = styled.input`
  width: 100%;
  padding: 15px 0;
  border-top: 1px solid #ccc;
  border-bottom: none;
  border-left: 0;
  border-right: 0;
  border-radius: 0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ccc;
    text-align: left;
    font-size: 14px;
  }
`;

const TimeStamp = styled.div`
  color: #ccc;
  font-size: 12px;
  margin: 15px 0;
`;

class CommentSection extends React.Component {
  state = {
    comments: this.props.post.comments,
    comment: "",
    username: localStorage.getItem("username")
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
    const nextComment = {
      text: this.state.comment,
      username: this.state.username
    };
    // grab the state as slice
    const comments = this.state.comments.slice();
    // push the next comment to the comments array
    comments.push(nextComment);
    // set the state with the next comment and clear the comment value
    this.setState({ comments: comments, comment: "" });
    // add a loop to update the local storage
    setTimeout(() => {
      this.setComments();
    }, 600);
  };

  // TODO: might add a way to delete comment if i get time
  deleteComment = event => {
    console.log(
      "TODO: fill in some logic for this event method",
      event.target.name
    );
    // TODO: refactor this to be done in a react way and actually deal with the data
    event.currentTarget.style.display = "none"; // not the way to do it but it is visually correct just not in any way the actual feature that was requested. just using that as a placeholder for now
  };
  render() {
    return (
      <div className="comment-wrapper">
        {this.state.comments.map((comment, index) => (
          <Comment
            key={index}
            comment={comment}
            delComment={this.deleteComment}
          />
        ))}
        <TimeStamp>
          {moment()
            .startOf("day")
            .fromNow(this.props.post.timestamp)
            .toUpperCase()}{" "}
          AGO
        </TimeStamp>
        <form onSubmit={this.submitComment}>
          <CommentInput
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
