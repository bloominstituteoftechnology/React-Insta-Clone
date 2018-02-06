import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js'

const PostContainer = (props) => {
  const post = props.post;

  return (
    <div className="PostContainer">
      <div>
        <img src={post.thumbnailUrl} alt={post.thumbnailUrl} />
        <h3>{post.username}</h3>
      </div>

      <div>
        <img src={post.imageUrl} alt={post.imageUrl} />
      </div>

      <div>
        <h3>Likes: {post.likes}</h3>
      </div>

      <div>
        <h3>{post.timestamp}</h3>
      </div>

      <CommentSection comments={post.comments} />
    </div>
  )
}

export default PostContainer;
