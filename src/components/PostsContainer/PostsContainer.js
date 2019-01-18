import React from 'react';
import Post from './Post';
import styled from 'styled-components';


const Container = styled.div`
height: 450px;
width: 35%;
margin: 5px auto;
 `;

const PostsContainer = props => {
  return (
    <Container>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </Container>
  );
};

export default PostsContainer;