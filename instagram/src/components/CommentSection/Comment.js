import React from 'react';
import PropTypes from 'prop-types';



const Comment = props => {
  return (
    <StyledParagraph comment ><strong>{props.comment.username}</strong> {props.comment.text}</StyledParagraph>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
}

export default Comment;
