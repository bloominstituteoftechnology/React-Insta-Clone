import React from "react";
import Post from "./Post";
import styled, { css } from "styled-components";

const PostsWrapper = styled.div`
  height: 500px;
  width: 50%;
  margin: 5px auto;
`;

const PostsContainer = props => {
  return (
    <PostsWrapper>
      <div className="posts-container-wrapper">
        {props.posts
          .filter(post => {
            return post.username.includes(props.searchTerm);
          })
          .map(p => (
            <Post key={p.imageUrl} post={p} />
          ))}
      </div>
    </PostsWrapper>
  );
};

export default PostsContainer;
