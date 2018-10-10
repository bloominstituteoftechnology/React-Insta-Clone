import React from "react";
import PostHeader from "./PostHeader/PostHeader";
import PostImage from "./PostImg/PostImg";
import CommentSection from "../CommentSection/CommentSection";
import Comment from "../Comment/Comment";
import "./PostContainer.css"

export default ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.username + post.timestamp}>
            <PostHeader
              thumbnailUrl={post.thumbnailUrl}
              username={post.username}
            />
            <PostImage imageUrl={post.imageUrl} />
            <CommentSection likes={post.likes} comments={post.comments} />
          </div>
        );
      })}
    </div>
  );
};