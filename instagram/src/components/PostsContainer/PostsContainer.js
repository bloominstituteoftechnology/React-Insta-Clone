import React from 'react';
import Post from './Post';
import './Posts.css';
import styled from 'styled-components';

const PostContainer = styled.div`
    height: 600px;
    width: 55%;
    margin: 5px auto;
`;


const PostsContainer = props => {
  return (
    <PostContainer>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} addLike={props.addLike}/>)}
      
    </PostContainer>
  );
};

export default PostsContainer;