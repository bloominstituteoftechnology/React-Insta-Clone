import React from "react";

const PostPicture = props => {
  return <img src={props.data.imageUrl} alt="[]" className="post-picture" />;
};

export default PostPicture;
