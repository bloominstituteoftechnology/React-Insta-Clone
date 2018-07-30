import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css'

const PostContainer = props => {
  console.log(props.user)
  return (
    <div className='post'>
      <PostHeader user={props.user}/>
      <PostImage src={props.user.imageUrl}/>
      <CommentSection likes={props.user.likes} comments={props.user.comments} />
    </div>
  );
};

export default PostContainer;
