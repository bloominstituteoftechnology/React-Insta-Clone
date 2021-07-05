import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import './Posts.css';
import styled from 'styled-components';

const PostBorder = styled.div`
  border: 1px solid #d3d3d3;
  margin: 10px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const PostImage = styled.img`
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
        <PostImage
          alt="post thumbnail"
          src={props.post.imageUrl}
        />
      </PostImageWrapper>
      <CommentSection likes={props.post.likes} id={props.post.imageUrl} comments={props.post.comments} />
    </PostBorder>
  );
};

export default Post;
