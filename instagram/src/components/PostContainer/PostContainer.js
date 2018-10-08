import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  console.log("Post Container props are:", { props });
  // console.log('Post Container posts are:',{props.posts});
  const posts = props.posts;
  console.log(posts.dummyData[0]);
  return (
    <div className="PostContainer">
      <div>
        {posts.dummyData.map((post, index) => (
          <div className='singlepost' key={index} post={post}>
            {post.username}
            <CommentSection />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
