import React from "react";

const Posts = props => {
  return (
    <div>
      <div className="user">
        <img src={props.thumbnailUrl} alt="thumbnail" className="thumbnail" />
        <h3 className="username">{props.username}</h3>
      </div>
      <img alt="post" src={props.imageUrl} className="post-image"/>
    </div>
  );
};

export default Posts;
