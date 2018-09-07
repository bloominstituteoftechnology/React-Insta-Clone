import React from 'react';
import styled from 'styled-components';

function Post(props) {
  return (
    // console.log('post', props.post),
    <div>
      <Header>
        <Thumbnail src={props.post.thumbnailUrl} alt="" />
        <Username>{props.post.username}</Username>
      </Header>
      <PostImage src={props.post.imageUrl} alt="" />
    </div>
  );
}

export default Post;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const Thumbnail = styled.img`
  border-radius: 50%;
  width: 32px;
  height: auto;
`;

const Username = styled.h1`
  margin-left: 20px;
  font-size: 1rem;
  font-weight: 600;
`;

const PostImage = styled.img``;
