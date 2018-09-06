import React from 'react';
import Post from './Post';
import './Posts.css';
import styled from "styled-components";

const PostsWrapper = styled.div`
height: 50%;
width: 33%;
min-width: 400px;
margin: 5px auto;
`;

const PostsContainer = props => {
  return (
    <PostsWrapper>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </PostsWrapper>
  );
};

export default PostsContainer;
