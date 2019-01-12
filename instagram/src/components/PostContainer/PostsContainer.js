import React from "react";
import styled from "styled-components";
import Post from "./Post";
import PropTypes from "prop-types";

const PostsContainerWrapper = styled.div`
  width: 80%;
  margin: 5px auto;
`;

const PostsContainer = props => {
  return (
    <PostsContainerWrapper>
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </PostsContainerWrapper>
  );
};

PostsContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostsContainer;
