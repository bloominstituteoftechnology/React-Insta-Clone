import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const Post = props => {
  return (
    <div className='post'>
      <div className='opUserInfo'>
        <img src={props.post.thumbnailUrl} alt='Avatar' />
        <h3>{props.post.username}</h3>
      </div>
      <img src={props.post.imageUrl} alt='Original Post'/>
      <CommentSection 
        comments={props.post.comments}
        likes={props.post.likes}
      />
    </div>
  )
}

export default Post;