import React from 'react';
import Post from './Post';
//import './Posts.css';
import styled, {css} from 'styled-components';

const PostsContainerWrapper = styled.div`
height: 500px;
width: 30%;
margin: 5px auto;
`;

const PostsContainer = props => {
  return (
    <PostsContainerWrapper>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </PostsContainerWrapper>
  );
};

export default PostsContainer;
