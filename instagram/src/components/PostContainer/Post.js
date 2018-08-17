import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Header from './Header';

const Post = props => {
    return (
        <div className='post-border'>
          <Header
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
          />
          <div className='post-image-wrapper'>
            <img
              alt='post thumbnail'
              className='post-image'
              src={props.post.imageUrl}
            />
          </div>
          <CommentSection
          comm={props.post}
          />
        </div>
      );
}

export default Post;