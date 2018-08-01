import React from "react";
import CommentInput from "../CommentSection/CommentInput";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.posts.map((item, index) => {
        return (
          <div key={index}>
            <div className="username-header">
              <img className="thumbnail" src={item.thumbnailUrl} alt="user" />
              <div className="user head">{item.username}</div>
            </div>
            <img className="post-img" src={item.imageUrl} alt="Post-Image" />
            <div className="img-icons">
            </div>
            <div>
              <CommentInput likes={item.likes} comments={item.comments} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PostContainer;
