import React from "react";
import Post from "./Post";

const PostsContainer = props => {
  return (
    <div className="Post-Container">
      {props.posts.map(data => (
        <Post
          user={data.username}
          thumb={data.thumbnailUrl}
          pic={data.imageUrl}
          like={data.likes}
          comment={data.comments}
          time={data.timestamp}
        />
      ))}
    </div>
  );
};

export default PostsContainer;