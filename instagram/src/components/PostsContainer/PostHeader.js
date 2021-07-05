import React from 'react';
//import './Posts.css';
import styled from 'styled-components';
import {PostHeaderStyled} from '../Styles/Reusables/reusables';

const PostHeader = props => {
  return (
    <PostHeaderStyled className="post-header">
      <div className="post-thumb-wrapper">
        <PostThumb
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div>{props.username}</div>
    </PostHeaderStyled>
  );
};

const PostThumb = styled.img`
  height: 100%;
  border-radius: 50%;
`;

export default PostHeader;