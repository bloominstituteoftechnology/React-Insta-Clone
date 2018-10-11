import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/commentsection";
import PostLikes from "./PostLikes";

const Post = props => {
  return (
    <div className="post">
      <div className="postheader">
        <img
          className="profile-pic"
          src={props.post.thumbnailUrl}
          alt="user profile"
        />
        <h3 className="user-name">{props.post.username}</h3>
      </div>
      <div className="imgpost">
        <img className="large-img-post" src={props.post.imageUrl} />
      </div>
      <div className="icons-likes-comments">
        <div className="likes">
          <PostLikes likes={props.post.likes} />
        </div>
        <div className="comment-section">
          <CommentSection comments={props.post.comments} />
        </div>
      </div>
    </div>
  );
};

export default Post;
