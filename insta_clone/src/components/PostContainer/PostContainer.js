import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer({ posts }) {
  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          {' '}
          {post.username} <CommentSection comments={post.comments} />
        </div>
      ))}
    </>
  );
}

export default PostContainer;
