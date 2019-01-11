import React from "react";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";

const PostsPage = props => {
  return (
    <div className={"content"}>
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
    </div>
  );
};

PostsPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.string
};

export default PostsPage;
