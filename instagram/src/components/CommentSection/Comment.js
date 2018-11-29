import React from 'react';
import PropTypes from 'prop-types';
import {ParagraphStyles} from '../Styles'



const Comment = props => {
  return (
    <ParagraphStyles comment ><strong>{props.comment.username}</strong> {props.comment.text}</ParagraphStyles>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
}

export default Comment;
