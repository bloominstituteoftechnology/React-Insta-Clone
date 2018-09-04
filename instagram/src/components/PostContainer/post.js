import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './post-header';
import CommentSection from '../CommentSection/comment-section';


function Post(props) {
  return(
    <div className='post-content'>
      <div className='post-header'>
        <PostHeader thumbnailUrl={props.post.thumbnailUrl} username={props.post.username} />  
      </div>
      <div className='post-image'>
        <img src={props.post.imageUrl} alt='Post image' />
      </div>
      <div className='like-comment'>
        <p>{props.post.likes} likes</p>
      </div>
        <CommentSection comments={props.post.comments} />
      <div className='time-stamp'>
        <p>{props.post.timestamp}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  imageUrl: PropTypes.string
}

export default Post;