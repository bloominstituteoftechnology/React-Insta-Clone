import React from "react";
import Post from "./Post";
import styled from 'styled-components';

const PostContainer = styled.div`
  max-width: 640px;
  width: 100%;
  margin: auto;
`;

const PostsContainer = props => {
  return (
    <PostContainer>
      {props.dataSet.map(p => <Post key={p.imageUrl} newPost={p} increment={props.incrementLikes} />)}
    </PostContainer>
  );
};

export default PostsContainer;