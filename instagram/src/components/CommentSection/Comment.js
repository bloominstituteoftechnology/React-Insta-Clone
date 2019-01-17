import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import './comment-section.css'
const CommentContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    margin-bottom: 5px;
`
const CommentUsername = styled.h3`
    font-weight: 700;
    margin-right: 10px;
`
const Comment = props => {

  return (
    <CommentContainer>
      <CommentUsername>{props.username}</CommentUsername>
      <p>{props.text}</p>
    </CommentContainer>
  )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
}

export default Comment
