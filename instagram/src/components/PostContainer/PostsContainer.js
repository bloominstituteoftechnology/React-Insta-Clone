import React from 'react';
import Post from './Post';
import styled from 'styled-components';
// import './Posts.css';

const PostsContainerWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

const PostsContainer = props => {
  return (
    <PostsContainerWrapper>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </PostsContainerWrapper>
  );
};

export default PostsContainer;