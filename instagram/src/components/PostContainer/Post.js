import React from 'react';
import CommentSectionContainer from '../CommentSection/CommentContainer';
import PostHeader from './PostHeader';
import './Post.css';

const Post = props => {
    return (
        <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-img-wrapper">
        <img
          alt="post thumbnail"
          className="post-img"
          src={props.post.imageUrl}
        />
      </div>
      <CommentSectionContainer comments={props.post.comments} />
    </div>
    );
}

export default Post;