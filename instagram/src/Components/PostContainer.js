import React from 'react';
import HeartIcon from './Img/heart-icon.png';
import ChatBubble from './Img/bubble.png';
import CommentSection from './CommentSection';


const PostContainer = props => {
  return(
  <div className='post'>
      <div className='heading'>
        <img src={props.post.thumbnailUrl} alt='userthumbnail' className='thumb'/>
        <h3 className='user'>{props.post.username}</h3>
      </div>
      
      <img src={props.post.imageUrl} alt='userimg' className='image'/>

    <div className='icons'>
      <img src={HeartIcon} alt='heart' className='heart'/>
      <img src={ChatBubble} alt='chat bubble' className='bubble'/>
      <h4>{props.post.likes} likes</h4>
      <h1>{}</h1>
    </div>

    <div className='comments'>
      <CommentSection comments={props.post.comments}/>
      
    </div>
  </div>
  )
}

export default PostContainer;