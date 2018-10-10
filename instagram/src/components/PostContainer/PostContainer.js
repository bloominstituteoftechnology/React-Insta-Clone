import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const PostContainer = props => {
  return (
    <div className="postContainer">
      {props.data.map(post => {
        return (
          <div className="post">
            <div className="header">
              <img
                className="thumbnail"
                src={post.thumbnailUrl}
                alt="thumbnail"
              />
              <p className="username">{post.username}</p>
            </div>
            <div className="imageContainer">
              <img className="postImage" src={post.imageUrl} alt="post" />
            </div>
            <div className="footer">
              <div className="footerIcons">
                <FontAwesomeIcon icon="heart" />
                <FontAwesomeIcon icon="comment" />
              </div>
              <div className="likes">{post.likes} likes</div>
            </div>
            <CommentSection comments={post.comments} />
          </div>
        );
      })}
    </div>
  );
};

export default PostContainer;
