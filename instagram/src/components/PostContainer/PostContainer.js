import React from "react";
import '../PostContainer/PostContainer.css';
import Post from "../PostContainer/Post";



const PostContainer = props => {
  return (
    <div className="post-wrapper">
      {props.posts.map(post => (
        <Post key={post.imageUrl} post={post} />
      ))}
    </div>
  );
};


export default PostContainer;

//iterate over list of posts and give me a new array of posts components
