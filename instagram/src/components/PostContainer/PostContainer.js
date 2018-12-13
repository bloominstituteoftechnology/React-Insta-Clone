import React from "react";
import CommentSection from "./../CommentSection/CommentSection";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.users.map(user => (
        <div key={user.imageUrl} className="post">
          <header className="post-header">
            <img className="user-thumbnail" src={user.thumbnailUrl} />
            <div className="username">{user.username}</div>
          </header>
          <img className="post-image" src={user.imageUrl} />
          <CommentSection />
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
