import React from 'react';
import PropTypes from 'prop-types';
// import './PostContainer.css';

import styled from 'styled-components';

import Post from './Post'

const PostWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  border: 1px solid black;
`

const PostContainer = props => {
  return (
    <PostWrapper>
      <Post data={props.entry} />
  </PostWrapper>
  )
}

PostContainer.propTypes = {
  entry: PropTypes.shape({
    comments: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  })
}




export default PostContainer
