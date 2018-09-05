import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

import './PostContainer.css';

const Post = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      {/* <div className="two-icons">
        <section>
          <i className="far fa-heart"></i>
        </section>
        <section>
          <i className="far fa-comment"></i>
        </section>
      </div> */}

      {/* <div className="likes">
        <div>373 likes</div>
      </div> */}
      <CommentSection comments={props.post.comments} />

      <div className="time-stamp">2 HOURS AGO</div>
    </div>
  );
};

export default Post;