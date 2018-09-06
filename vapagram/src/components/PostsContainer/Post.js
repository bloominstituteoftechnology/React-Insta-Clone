import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import styled from 'styled-components';

const PostBorder = styled.div`
  border: 1px solid #d3d3d3;
  margin: 5px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;
const PostImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Post = props => {
  return (
    <PostBorder>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <PostImageWrapper>
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </PostImageWrapper>
      <CommentSection comments={props.post.comments} />
    </PostBorder>
  );
};

export default Post;
