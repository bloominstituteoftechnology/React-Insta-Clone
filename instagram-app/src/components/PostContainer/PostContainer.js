import React from 'react';
import CommentSection from '../Comment/CommentSection';
import HeaderPost from '../Header/HeaderPost';
import ImagePost from '../Post-Image/ImagePost';

import './postcontainer.css';

const PostContainer = props => {
  return (
    <div class='post-container'>
      <HeaderPost thumbnail={props.post.thumbnailUrl} usernames={props.post.username} />
      <ImagePost img={props.post.imageUrl} />
      <CommentSection comment={props.post.comments} users={props.post} likes={props.post.likes} />
    </div>
  );
};

export default PostContainer;
