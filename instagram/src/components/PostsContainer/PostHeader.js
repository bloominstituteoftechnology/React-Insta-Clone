import React from 'react';
import './Posts.css';
import styled from 'styled-components';

const PostH = styled.div`
display: flex;
`;

const PostThumbWrapper = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const PostThumb = styled.img`
  height: 80%;
  border-radius: 50%;
`;

const PostHeader = props => {
  return (
    <PostH>
      <PostThumbWrapper>
        <PostThumb
          alt="post header"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <div>{props.username}</div>
    </PostH>
  );
};

export default PostHeader;
