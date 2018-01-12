import React from 'react';

import CommentSection from '../CommentSection/CommentSection.js';



const PostContainer = (props) => {
  const post = props.post // write post.key instead of props.post.key
  return (
    <div>

      <div>
        <img src={post.thumbnailUrl} />
        <h3>{post.username}</h3>
      </div>

      <div>
        <img src={post.imageUrl} />
      </div>

      <div>
        <div>
          <h3>{post.likes}</h3>
        </div>


        <CommentSection comments={post.comments} timestamp={post.timestamp} />
      </div>

    </div>
  )
};

export default PostContainer;