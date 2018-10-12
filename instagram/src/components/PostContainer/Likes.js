import React from 'react'
import PropTypes from 'prop-types';
import {LikeSectionContainer, LikeSectionP, ActionIcon, LikeIcon, CommentIcon} from './styled'

const Likes = props => {
  return (
    <LikeSectionContainer>
      <ActionIcon>
        <LikeIcon onClick={props.increaseLikes} src='https://image.flaticon.com/icons/svg/149/149217.svg' alt='likes'/>
        <CommentIcon src='https://image.flaticon.com/icons/svg/25/25663.svg' alt='comment icon'/>
      </ActionIcon>
      <LikeSectionP>{props.likes}</LikeSectionP>
    </LikeSectionContainer>
  )
}

Likes.propTypes = {
  likes: PropTypes.number.isRequired
}

export default Likes;