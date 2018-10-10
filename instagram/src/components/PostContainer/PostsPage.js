import React from 'react';
import PostContainer from "./PostContainer";

const PostsPage = (props) => {
  return (
        <div className="Posts">
          {props.posts.map((post, idx) => (
            <PostContainer key={idx} post={post} />
          ))}
        </div>
  )
}

export default PostsPage;