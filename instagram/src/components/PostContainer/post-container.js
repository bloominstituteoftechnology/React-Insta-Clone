import React from 'react';
import Post from './Post';
import './PostContainer.css'
import styled from 'styled-components'

const PostContainerWraper = styled.div`
   padding:  20px 100px;
`;


const PostsContainer = props => {
    return (
      <PostContainerWraper className="posts-container-wrapper">
        {props.posts.map (p => 
        <Post key={p.imageUrl} 
        post={p}
        />)}
      </PostContainerWraper>
    );
  };

export default PostsContainer;
