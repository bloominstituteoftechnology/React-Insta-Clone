import React from "react";
import "./Posts.css";

import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import Comments from "../CommentSection/Comments";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.posts.map(x => {
        return (
          <div>
            <PostHeader username={x.username} thumbnailUrl={x.thumbnailUrl} />
            <PostContent imageUrl={x.imageUrl} />
            <Comments comments={x.comments} />
          </div>
        );
      })}
    </div>
  );
};

export default PostContainer;
