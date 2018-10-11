import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import './PostContainer.css';


const PostContainer = props => (
  <div className='post-container'>
    <div className="user-information">
      <img src={props.post.thumbnailUrl} alt="thumbnail" className="user-thumbnail" />
      <p>{props.post.username}</p>
    </div>
    <img src={props.post.imageUrl} alt="Post" className="post-image" />
    <div className='interactivity-area'>
      <div className='interactive-buttons'>
        <div onClick={() => props.addLikeHandler(props.post.timestamp)} className="interactive-button like-icon"></div>
        <div className="interactive-button comment-icon"></div>
        <form action='submit' onSubmit={(event) => props.addCommentHandler(event, props.post.timestamp)} >
          <input 
            type='text' 
            className='commentInput' 
            placeholder='enter new comment'
            value={props.newComment}
            onChange={(event) => props.inputEventHandler(event)}
          />
        </form>
      </div>
      <p className='like-count'>{props.post.likes} likes</p>
    </div>
    <CommentSection comments={props.post.comments} />
  </div>
);

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};



export default PostContainer;