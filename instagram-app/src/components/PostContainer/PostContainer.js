import React from 'react';
import CommentSection from '../Comment/CommentSection';
import HeaderPost from '../Header/HeaderPost';
import ImagePost from '../Post-Image/ImagePost';
import PostPage from './PostPage';

import './postcontainer.css';

const PostContainer = props => {
  return (
    <div class='post-container'>
      <HeaderPost thumbnail={props.post.thumbnailUrl} usernames={props.post.username} key={props.post.key} />
      <ImagePost img={props.post.imageUrl} key={props.post.key} />
      <CommentSection comment={props.post.comments} users={props.post} likes={props.post.likes} time={props.post.timestamp} key={props.post.key} />
    </div>
  );
};

export default PostContainer;
