import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";

const CommentContainer = styled.div`
  font-weight: 300;
  font-size: 14px;
  padding: 0 20px;
  form {
    max-width: 600px;
  }
`;

const Timestamp = styled.p`
  padding: 0 20px;
`;

const CommentInput = styled.input`
  width: 560px;
  border: none;
  height: 50px;
  padding: 0 20px;
`;

const CommentUserName = styled.span`
  font-weight: 500;
  font-size: 12px;
  margin-right: 5px;
`;

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: "",
      timestamp: props.timestamp
    };
  }
  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: localStorage.getItem("username"),
          text: this.state.newComment
        }
      ]
    });
  };
  handleChange = event => this.setState({ newComment: event.target.value });
  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => (
          <CommentContainer key={index}>
            <p>
              <CommentUserName>{comment.username}</CommentUserName>
              {comment.text}
            </p>
          </CommentContainer>
        ))}
        <Timestamp>
          {moment(this.state.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
        </Timestamp>
        <form onSubmit={this.handleSubmit}>
          <CommentInput
            type="text"
            name="comment"
            placeholder="Add a comment..."
            onChange={this.handleChange}
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
