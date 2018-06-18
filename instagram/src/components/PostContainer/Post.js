import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostLikes from './PostLikes';
import CommentSection from '../CommentSection/CommentSection';

const Post = (props) => {
  return(
    <li className="post">
      <PostHeader thumbnail={props.postData.thumbnailUrl} username={props.postData.username} />
      <PostImage imageUrl={props.postData.imageUrl} />
      <PostActions />
      <PostLikes likes={props.postData.likes} />
      <CommentSection comments={props.postData.comments} timestamp={props.postData.timestamp} />
    </li>
  );
};

export default Post;