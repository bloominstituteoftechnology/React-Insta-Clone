import React from "react";
import Post from "./Post";

const PostContainer = props => {
    return (
        <div>
          {props.dataSet.map(newPost => (
            <Post
              key={newPost.timestamp}
              post={newPost}
            />
          ))}
        </div>
      );
}

export default PostContainer;