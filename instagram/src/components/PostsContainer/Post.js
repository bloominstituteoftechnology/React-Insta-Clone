import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import like from '../../assets/heart.svg';

import './Posts.css';

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
        <div onClick={()=> props.addLike(props.post.likes)}>
            <img src={like} className='heart' alt='' />
        </div>
        {props.post.likes}
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;