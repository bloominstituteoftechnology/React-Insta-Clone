import React from "react";
import PropTypes from "prop-types";
import { StyledDiv, StyledImg } from "../Styles/StyleSheet";

const Comment = props => {
  return (
    <StyledDiv commentSection>
      <StyledDiv commentNickname>
        <strong>{props.comment.nickname}</strong>
      </StyledDiv>
      <StyledDiv commentText>{props.comment.text}</StyledDiv>{" "}
    </StyledDiv>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
