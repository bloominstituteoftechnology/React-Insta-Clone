import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

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
              <div className="likes">{post.likes} likes</div>
            </div>
            <CommentSection 
            comments = {post.comments}
            />
          </div>
        );
      })}

    </div>
  );
};

export default PostContainer;
