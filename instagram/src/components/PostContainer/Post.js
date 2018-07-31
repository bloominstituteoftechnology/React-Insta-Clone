import React from 'react'
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  return (
    <div>
    <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div>
        <img
          alt="someones content"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
    <CommentSection 
    comments={props.post.comments}
      /> 
    </div>
  );
};


export default Post;
