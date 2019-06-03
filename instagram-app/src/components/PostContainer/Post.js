import React from "react";

import PostTop from "./PostTop";

const Post = props => {
  return (
    <div>
      <PostTop 
      username={props.postData.username}
      thumbnailUrl={props.postData.thumbnailUrl}
      image={props.postData.image}
      />
    </div>
  )
}

export default Post;