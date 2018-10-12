import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCommentItem = styled.div`
  margin-bottom: 5px;
`;

const StyledBoldName = styled.span`
  font-weight: bold;
  margin-right: 0.2%;
`;

const StyledCommentText = styled.span`
  padding-left: 1%;
`;

class Comment extends React.Component {
  render() {
    return (
      <StyledCommentItem>
        <StyledBoldName>{this.props.comment.username}</StyledBoldName>
        <StyledCommentText>{this.props.comment.text}</StyledCommentText>
      </StyledCommentItem>
    );
  }
}

Comment.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      ).isRequired
    })
  ).isRequired
};

export default Comment;
