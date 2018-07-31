import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className='post-container'>
      <div className='title'>
        <img src={props.data.thumbnailUrl} className='thumbnail' alt='Thumbnail'/>
        <p>{props.data.username}</p>
      </div>
      <img src={props.data.imageUrl} className='image' alt='image' />
      <div className='buttons'>
        <i className='far fa-heart' />
        <i className='far fa-comment' />
      </div>
      <h4>{props.data.likes} likes</h4>
      <CommentsSection data={props.data.comments} />
    </div>
  )
}

export default PostContainer;
