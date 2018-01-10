import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
  return (
    <ul>
      {props.posts.map(post => {
        return (
          <li>
            <div><img src={post.thumbnailUrl} width='25px'/> {post.username}</div>
            <div><img src={post.imageUrl} /></div>
            {post.likes} likes
            <CommentSection comments={post.comments} />
            {post.timestamp}
          </li>
        );
      })}
    </ul>
  );
}

export default PostContainer;