import React from "react";

import PostTop from "./PostTop";
import PostContent from "./PostContent";

const Post = props => {
  return (
    <div>
      <PostTop 
      username={props.postData.username}
      thumbnail={props.postData.thumbnailUrl}
      />
     <PostContent 
     image={props.postData.imageUrl}
     likes={props.postData.likes}
     />
    </div>
  )
}

export default Post;