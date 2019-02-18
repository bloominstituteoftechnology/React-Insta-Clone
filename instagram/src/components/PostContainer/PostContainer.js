import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <>
      {props.posts.map((post, i) => (
        <div className="post-container" key={i}>
          {post.username}
          <CommentSection comments={post.comments} />
        </div>
      ))}
    </>
  );
};

export default PostContainer;
