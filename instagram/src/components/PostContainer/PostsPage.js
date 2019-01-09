import React from "react";
import PostContainer from "./PostContainer";

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

export default PostsPage;
