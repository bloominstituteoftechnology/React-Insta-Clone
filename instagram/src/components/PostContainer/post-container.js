import React from 'react';
import PropTypes from 'prop-types';
import Post from './post';
import './post-container.css';
import styled from 'styled-components';

const PostContainerDiv = styled.div`
  max-width: 640px;
  width: 100%;
  margin: 50px auto;
  background-color: #ffffff;
`;


function PostContainer(props) {
  return(
    <PostContainerDiv>
      {props.posts.map(post => <Post key={post.imageUrl} post={post} />)}
    </PostContainerDiv>
  );
};

PostContainer.PropTypes = {
  post: PropTypes.array
};



export default PostContainer;