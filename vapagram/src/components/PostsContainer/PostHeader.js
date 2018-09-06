import React from 'react';
import './Posts.css';
import styled from 'styled-components';

const PostHeaderClass = styled.div`
  display: flex;
`;
const PostThumbWrapper = styled.div`
  height: 50px;
  width: 50px;
`;

const PostHeader = props => {
  return (
    <PostHeaderClass>
      <PostThumbWrapper>
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <div>{props.username}</div>
    </PostHeaderClass>
  );
};

export default PostHeader;
