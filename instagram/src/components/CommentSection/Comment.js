import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentsComment = styled.div`
  display: flex;
`
const CommentsUsername = styled.div`
  font-weight: bold;
  margin-right: 5px;
`
const CommentsText = styled.div` 
`

const Comment = (props) => {
  return (
    <CommentsComment>
      <CommentsUsername>{props.comment.username}</CommentsUsername>
      <CommentsText>{props.comment.text}</CommentsText>
    </CommentsComment>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}
export default Comment;