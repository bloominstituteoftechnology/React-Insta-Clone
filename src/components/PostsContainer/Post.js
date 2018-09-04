import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <div class="feedback-buttons">
        <img src="http://www.pngonly.com/wp-content/uploads/2017/06/Instagram-Heart-PNG-Transparent-210x210.png" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1lu3jW04eocmGDkdSeUalJOYvdShSIWPinb3UeIoH6wnIsb8" />
      </div>
      <p>{props.post.likes}</p>
      <CommentSection post={props.post} addNewComment={props.addNewComment} />
    </div>
  );
};

export default Post;
