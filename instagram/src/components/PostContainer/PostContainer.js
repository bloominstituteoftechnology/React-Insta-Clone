import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
  const post = props.insta;
  return (
    <div>
      <div>
        <div>
          <img src={post.thumbnailUrl} alt="Instagram" /> {post.username}
        </div>
        <div className="instaImg">
          <img src={post.imageUrl} alt="Instagram" />
        </div>
        <div>{post.likes}</div>
        <div>
          <CommentSection words={post.comments} />
        </div>
        <div>{post.timestamp}</div>
      </div>
    </div>
  );
};

export default PostContainer;
