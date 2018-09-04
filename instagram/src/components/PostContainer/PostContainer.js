import React from 'react';
import CommentList from '../CommentSection/CommentList';

import './Post.css';

function PostContainer(props) {
  return (
    <div className='post-container'>

      <div className='user-info'>
        <img className='profile-pic' src={props.profileObject.thumbnailUrl} alt='Profile Picture'/>
        <h4 className='username'>{props.profileObject.username}</h4>
      </div>

      <div className='post'>
        <img className='image-post' src={props.profileObject.imageUrl} alt='Image Post'/>  

        <div className='like-section'>
          <div className='post-logos'>
            <div className='heart'></div>
            <div className='message-bubble'></div>
          </div>          
          <h4 className='like-counter'>{props.profileObject.likes + 'likes'}</h4>
          <CommentList comments={props.profileObject.comments} />
      </div>

      </div>      
      

      <div className='add-comment'>
        <form>
          <input placeholder='Add a comment...'></input>
        </form>        
      </div>

    </div>
  );
}

export default PostContainer;