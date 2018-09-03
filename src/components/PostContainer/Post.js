import React from 'react';
import './PostContainer.css'
const Post = (props) => {
  console.log(props);
   return(
     <div className="Post">
      <div className="title">
      <img src={props.userData.thumbnailUrl} alt="thumbnailUrl" className='thumbnail' />
      <h4>{props.userData.username}</h4>
     </div>
     <img src= {props.userData.imageUrl} alt ="imageUrl" className ='image'/>
<div className="likeArea">

  <div className="HeartLikeButtton2">♡</div>
  <div>💬</div>
</div>

     </div>
   )
}

export default Post
