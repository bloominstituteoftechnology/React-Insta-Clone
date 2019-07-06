import React from "react";
import Post from "./Posts";
import "./PostContainerStyle.css";
import styled from "styled-components";

const PostContainer = styled.div`
  height: 40%;
  width: 50%;
  min-width: 300px;
  margin: 5px auto;
`;

const PostsContainer = props => {
  return (
    <PostContainer>
      {props.posts.map(post => (
        <Post key={post.imageUrl} post={post} />
      ))}
    </PostContainer>
  );
};

export default PostsContainer;
