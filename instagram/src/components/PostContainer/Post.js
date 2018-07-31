import React from 'react'
// import CommentSection from "../CommentSection/CommentSectionContainer";
import PostHeader from "./PostHeader";

import "./Posts.css";

/* <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      /> */
 /* <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      /> */ 

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
    </div>
  );
};


export default Post;
