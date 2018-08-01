import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css'

const PostContainer = props => {
  console.log(props.user)
  return (
    <div className='post'>
      <PostHeader user={props.user}/>
      <div className='post-img-wrapper'>
        <img className='post-img' src={props.user.imageUrl} alt=''/>
      </div>
      <div className='like-section'>
        <div className='like-section-icons'>
          <i className='far fa-heart'></i>
          <i className='far fa-comment'></i>
        </div>
        <p>{props.user.likes} likes</p>
      </div>
      <CommentSection comments={props.user.comments} />
    </div>
  );
};

export default PostContainer;
