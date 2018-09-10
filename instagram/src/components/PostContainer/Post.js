import React from 'react';
import './PostContainer.css';
import styled from 'styled-components';
import Username from '../Reusable';

const Wrapper = styled.div`
  padding: 10px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2%;
`;

const ImageCircle = styled.img`
  border-radius: 50%;
  height: 50px;
  width: auto;
  margin-right: 1%;
`;

const PostImage = styled.img`
  width: 100%;
  padding: 10px 0 5px 0;
`;



function Post(props) {
  return (
    <Wrapper>
      <Header>
        <ImageCircle src={props.post.thumbnailUrl} alt={''}/>
        <Username>{props.post.username}</Username>
      </Header>
      <PostImage src={props.post.imageUrl} alt={''}/>
    </Wrapper>
  )
}

export default Post;