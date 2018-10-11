import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import heart from '../../logos/heart.png';
import comment from '../../logos/comment.png';
import bookmark from '../../logos/bookmark.png';

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
      </div>
      <div className="logos">
        <div className="heart-comment" >
          <img className="imgs heart" src={heart}></img>
          <img className="imgs" src={comment}></img>
        </div>
        
        <div className="bookmark">
        <img className="imgs" src={bookmark}></img>
        </div>
        
      </div>
      <div className="likes">
        <div>{props.post.likes} likes</div>
        
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
