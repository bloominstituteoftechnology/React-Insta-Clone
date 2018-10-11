import React from "react";
import PropTypes from "prop-types";
import {Comments, StyledText} from "../../styles";

const CommentContent = props => {
    return (
        props.comments.map(comment => {
            return (
                <Comments key={Math.random()}>
                    <StyledText bold>{comment.username}</StyledText>
                    <StyledText>{comment.text}</StyledText>
                </Comments>
            );
        })
        
    );
}

CommentContent.propTypes = {
    comment: PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  };

export default CommentContent;