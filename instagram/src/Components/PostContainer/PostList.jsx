import React from "react";
import PostContainer from "./PostContainer";

const PostList = props => {
  console.log(props);
  return (
    <div>
      {props.posts.map((posts, index) => (
        <PostContainer
          key={index}
          thumbnail={posts.thumbnailUrl}
          imageUrl={posts.imageUrl}
          username={posts.username}
          likes={posts.likes}
          comments={posts.comments}
        />
      ))}
    </div>
  );
};

export default PostList;
