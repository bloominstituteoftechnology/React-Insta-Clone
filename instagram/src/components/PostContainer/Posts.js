import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import PostHeader from "./PostHeader";


const Posts = props => {
  console.log(props.posts);
  return (
    <div>
      <PostHeader
        username={props.posts.username}
        thumbnailUrl={props.posts.thumbnailUrl}
      />
      <div>
        <img
          src={props.posts.imageUrl}
          className="post-image"
          alt="attachment"
        />
      </div>
      <div>icons</div>
      <div>{props.posts.likes} likes</div>
      <CommentSection comments={props.posts.comments} />
      <div>{props.posts.timestamp}</div>
    </div>
  );
};

export default Posts;
