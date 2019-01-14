import React from "react";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";
import styled from "styled-components";

const Contents = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 98%;
  }
`;

const PostsPage = props => {
  return (
    <Contents>
      {props.posts.map(post => {
        return (
          <PostContainer
            data={post}
            key={post.timestamp}
            className="post-container"
            user={props.user}
          />
        );
      })}
    </Contents>
  );
};

PostsPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.string
};

export default PostsPage;
