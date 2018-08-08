import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import Comment from "./Comment";


const CommentWrapper = styled.div`
  display: flex;
  align-items: baseline;
  line-height: 0px;
  flex-wrap: wrap;
  p {
    font-size: 14px;
  }
`;

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentArray: props.comments,
      commentInput: ""
    };
  }
  handleEvent = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addComment = event => {
    event.preventDefault();
    const commentArray = this.state.commentArray.slice();
    commentArray.push({
      username: "testname",
      text: this.state.commentInput
    });
    this.setState({
      commentArray: commentArray,
      commentInput: ""
    })
    //const commentArray = {...this.state.commentArray} (Spread Operator)
  };

  render() {
    return (
      <CommentWrapper>
        {this.state.commentArray.map(comment => (
          <Comment key={comment.username} comment={comment} />
        ))}
        <CommentForm
          addComment={this.addComment}
          value={this.state.commentInput}
          handleEvent={this.handleEvent}
        />
      </CommentWrapper>
    );
  }
}

CommentSection.propTypes = { comments: PropTypes.array.isRequired };

export default CommentSection;
