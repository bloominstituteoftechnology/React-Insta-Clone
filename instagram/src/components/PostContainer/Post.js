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
      <PostHeader />
      <PostImage />
      <PostActions />
      <PostLikes />
      <CommentSection />
    </li>
  );
};

export default Post;