import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
const PostContainer = props =>
  props.data.map((post, index) => (
    <div key={index} className="post">
      <div className="profile">
        <img
          src={post.thumbnailUrl}
          alt={post.username}
          className="profile-picture"
        />
        <span className="username">{post.username}</span>
      </div>
      <img src={post.imageUrl} alt={post.comments[0].text} />
      <div className="icons">
        <FontAwesomeIcon
          icon={faHeart}
          style={{ height: "25px", width: "25px" }}
        />
        <FontAwesomeIcon
          icon={faComment}
          style={{ height: "25px", width: "25px" }}
        />
      </div>
      <p className="likes">{post.likes} likes</p>
      <CommentSection comments={post.comments} />
      <p className="timestamp">{post.timestamp}</p>
    </div>
  ));

export default PostContainer;
