import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostTop from './PostTop';
import './PostContainer.css';

const PostBody = props => {
  return (
    <div className="col">
      <PostTop
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="pbody">
        <img
          alt="thumbnail"
          className="pimage"
          src={props.post.imageUrl}
        />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default PostBody;
