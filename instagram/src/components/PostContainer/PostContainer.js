import React from "react";
import PostHeader from "./PostHeader/PostHeader";
import PostImg from "./PostImg/PostImg";
import CommentSection from "../CommentSection/CommentSection";
import Comment from "../CommentSection/Comment";
import './PostContainer.css';

export default ({ posts }) => {
  return (
    <div className="posts-container">
      {posts.map((post, i) => {
        return (
          <div className="post" key={post.username + post.timestamp}>
            <PostHeader
              thumbnailUrl={post.thumbnailUrl}
              username={post.username}
            />
            <PostImg imageUrl={post.imageUrl} />
            <CommentSection likes={post.likes} comments={post.comments} />
          </div>
        );
      })}
    </div>
  );
};