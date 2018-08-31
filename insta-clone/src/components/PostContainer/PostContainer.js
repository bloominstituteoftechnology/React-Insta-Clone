import React from "react";
import CommentSection from "../CommentSection/CommentSection";
//This will contain the post, including images, content, and comments

const PostContainer = props => {
  return (
    <div className="post">
      <div className="postHeader">
        <img src={props.thumbnailUrl} />
        <h2>{props.username}</h2>
      </div>
      <img src={props.imageUrl} />
      <CommentSection
        commentData{...props.commentData}

      />
    </div>
  );
};

export default PostContainer;
