import React from 'react';
import './Posts.css';
import styled from 'styled-components';

const PostHeaderBar = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 2%;
`;

const ThumbWrapper = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 2%;
`;

const Thumb = styled.img`
height: 100%;
border-radius: 50%;
`;

const PostHeader = props => {
  return (
    <PostHeaderBar>
      <ThumbWrapper>
        <Thumb
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </ThumbWrapper>
      <div><strong>{props.username}</strong></div>
    </PostHeaderBar>
  );
};

export default PostHeader;