import React from "react";
import Post from "./Post.js";

const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map((post, i) => {
        return (
          <div>
            <div>{post.username}</div>
            <img src={post.imageUrl} alt="post"/>
            <Post key={i} post={post} />{" "}
          </div>
        );
      })}

      {/* const list = {Object.keys(props.posts)} */}
      {/* {(props.posts).map((p,i) =>  {if (typeof(p) != ('object')) */}
      {/* } return p; }  */}

      {console.log(props.posts[0])}
      {console.log()}
    </div>
  );
};

export default PostsContainer;
