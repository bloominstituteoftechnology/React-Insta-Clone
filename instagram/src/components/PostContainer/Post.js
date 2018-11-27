import React from 'react';
import './Posts.css';
import PostHeader from './PostHeader';
import CommentContainer from '../CommentSection/CommentContainer';

const Post = props => {
  return(
    <div className='p-border'>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className='p-image-container'>
        <img className='p-image'
          src={props.post.imageUrl}
        />
      </div>
      <CommentContainer comments={props.post.comments} />
    </div>
  )
}

export default Post;
