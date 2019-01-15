import React from "react";

const PostImage = props => {
  return (
    <div className="post-photo">
      <img alt="Hamza Elkhoudiri" src={props.imageUrl} />
    </div>
  );
};

export default PostImage;
