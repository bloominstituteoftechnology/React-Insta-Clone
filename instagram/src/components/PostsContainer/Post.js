import React from 'react';
import './Posts.css';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import styled from 'styled-components';

const PostBorder = styled.div `
    border: 1px solid lightgray;
    width: 600px;
    height: 880px;
    margin: 40px auto;
  `;

const PostImageWrapper = styled.div `
    width: 600px;
  `;

const PostImage = styled.img `
    width: 600px;
    height: 600px;
  `;

const Post = props => {
  return (
    <PostBorder>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <PostImageWrapper>
        <PostImage
          src={props.post.imageUrl}
          alt="post thumbnail"
        />
      </PostImageWrapper>
      <CommentSection comments={props.post.comments} />
    </PostBorder>
  );
};

export default Post;