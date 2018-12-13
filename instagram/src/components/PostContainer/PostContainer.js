import React from "react";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.users.map(user => (
        <div key={user.username}>
          <img src={user.thumbnailUrl} className="user-thumbnail" />
          {user.username}
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
