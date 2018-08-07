import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import moment from "moment";

const CommentUser = styled.h5`
  font-size: 16px;
  font-weight: bold;
  margin-right: 6px;
`;

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
      commentArray: props,
      commentInput: ""
    };
  }
addNewComment = (event, index) => {
 if(event.target.value === true) {
   console.log("this might work")
 }
  }

  render() {
    return this.state.commentArray.comments.map(comment => {
      return (
        <CommentWrapper>
          <CommentUser>{comment.username}</CommentUser>
          <p>{comment.text}</p>
        </CommentWrapper>
      );
    });
  }
}

CommentSection.propTypes = { comments: PropTypes.array.isRequired };

export default CommentSection;
