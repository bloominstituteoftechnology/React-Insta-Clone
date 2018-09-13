import React from 'react';

import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection.js'

const Post = (props) => {
  console.log(props);
   return(
     <div className="Post">
      <div className="title">
      <img src={props.post.thumbnailUrl} alt="thumbnailUrl" className='thumbnail' />
      <h4>{props.post.username}</h4>
     </div>
     <img src= {props.post.imageUrl} alt ="imageUrl" className ='image'/>
<div className="likeArea">

  <div className="HeartLikeButtton2">♡</div>
  <div>💬</div>
</div>
<CommentSection handleChange ={props.handleChange} addNewComment={props.addNewComment} comments={props.post.comments}/>
</div>
);}










export default Post
