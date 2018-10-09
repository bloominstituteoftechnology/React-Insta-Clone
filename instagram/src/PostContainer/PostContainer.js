import React, { Component } from "react";
import PostHeader from "./PostHeader";
import Image from "./Image";
import Icons from "./Icons";
import CommentContainer from "./CommentSection/CommentContainer";
import NewComment from './CommentSection/NewComment';
const PostContainer = prop => {
  return (
    <div className="post-container">
      <PostHeader
        username={prop.data.username}
        thumbnailUrl={prop.data.thumbnailUrl}
      />
      <Image ImageUrl={prop.data.imageUrl} />
      <Icons like={prop.data.like} timestamp={prop.data.timestamp} />
      {prop.data.comments.map(item => {
        return <CommentContainer item={item} />;
      })}
      <NewComment />
    </div>
  );
};

export default PostContainer;
