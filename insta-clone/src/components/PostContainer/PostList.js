import React from "react";
import PostContainer from "./PostContainer";

//this component will receive data from the state and feed it into
//Post container

const PostList = props => {
  return (
    <div className="allPosts">
      {props.postData.map((post, index) => (
        <PostContainer
        key={index}
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
        imageUrl={post.imageUrl}
        commentData={post.comments}
         />
      )
    )}
    </div>
  );
};

export default PostList;
