import React from 'react';
import './Posts.css';
import styled from 'styled-components'; 

const UserHeader = styled.div `
    width: 600px;
    height: 70px;
    display: flex;
    flex-direction: row;
  `;

const PostThumbWrapper = styled.div `
    margin: 10px 20px;
  `;

const PostThumb = styled.img `
    border-radius: 50%;
    width: 50px;
    height: 50px;
  `;

const Username = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  `;

const PostHeader = props => {
  return (
    <UserHeader>
      <PostThumbWrapper>
        <PostThumb
          src={props.thumbnailUrl}
          alt="post header"
        />
      </PostThumbWrapper>
      <Username>{props.username}</Username>
    </UserHeader>
  );
};

export default PostHeader;