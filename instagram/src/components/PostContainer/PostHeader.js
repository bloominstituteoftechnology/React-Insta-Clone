import React from 'react';
import styled from 'styled-components';

const PostHeaderContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 3rem;
`;

const ThumbnailIMG = styled.img`
  border-radius: 5px;
  height: 100%;
`;

const ProfileUserName = styled.div`
  margin-left: 5px;
`;


const PostHeader = props => {
  return (
    <PostHeaderContainer>
      <ThumbnailIMG
        alt="post header"
        src={props.thumbnailUrl}
      />
      <ProfileUserName>
        {props.username}
      </ProfileUserName>
    </PostHeaderContainer>
  );
};

export default PostHeader;