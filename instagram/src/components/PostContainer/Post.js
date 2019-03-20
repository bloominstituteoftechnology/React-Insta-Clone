import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

const STYLE_BASE = "posts-section_";

const Post = props => {
  return (
    <div className={`${STYLE_BASE}postContainer`}>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className={`${STYLE_BASE}postImageContainer`}>
        <img
          alt="post thumbnail"
          className={`${STYLE_BASE}postImage`}
          src={props.post.imageUrl}
        />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;