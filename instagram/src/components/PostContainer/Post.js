import React from "react";

const Post = props => {
  return (
    <div className="post-header">
      <img src={props.user.thumbnailUrl} alt="" />
      <p>{props.user.username}</p>
    </div>
  );
};

export default Post;
