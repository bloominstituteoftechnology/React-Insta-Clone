import React from 'react';
import User from '../User/User';
import CommentSection from '../CommentSection/CommentSection';

function Post({ post }) {
  return (
    <div style={border} className="border">
      <User username={post.username} thumbnaiilUrl={post.thumbnailUrl} />
      <div>
        <img style={picPost} src={post.imageUrl} alt="" />
      </div>

      <div>
        <CommentSection comments={post.comments} />
      </div>
    </div>
  );
}

const picPost = {
  width: '100%'
};

const border = {
  border: 'solid 2px lightGray',
  margin: '20px'
};

export default Post;
