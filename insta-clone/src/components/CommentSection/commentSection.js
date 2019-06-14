import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentSection = styled.div`
  height: 125px;
  overflow: hidden;
`;
const Content = styled.span`
  font-weight: ${props => (props.username ? "bold" : "normal")};
`;
const Comment = styled.div`
  margin: 10px;
`;

export default class commentContainer extends React.Component {
  commentHandler = () => {
    if (this.props.comments) {
      return this.props.comments.map(comment => {
        return (
          <Comment>
            <Content username>
              {comment.username} <Content> {comment.text}</Content>
            </Content>
          </Comment>
        );
      });
    }
  };
  render() {
    return <CommentSection>{this.commentHandler()}</CommentSection>;
  }
}
commentContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};
