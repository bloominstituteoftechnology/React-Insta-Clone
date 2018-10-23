import React from 'react'
import './PostContainer.css'
import styled, { css } from 'styled-components'

const PostHeaderDiv = styled.div`
    display: flex;
    padding: 10px;
`

const PostThumb = styled.div`
    height: 80px;
    width: 80px;
`

export const UserName = styled.div`
  font-weight: 500;
  font-size: 0.8em;
  padding: 0 5px;
  ${props => props.bold && css`
      font-weight: 600;
      font-size: 1rem;
      padding: 5px;
    `};
`
const PostHeader = props => {
  return (
    <PostHeaderDiv>
      <PostThumb>

        <img
          alt='post header'
          className='post-thumb'
          src={props.thumbnailUrl}
        />
      </PostThumb>
      <UserName bold>{props.username}</UserName>
    </PostHeaderDiv>
  )
}

export default PostHeader
