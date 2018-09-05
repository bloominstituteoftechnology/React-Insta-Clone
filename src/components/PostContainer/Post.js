import React from 'react';
<<<<<<< HEAD
import './PostContainer.css';
import Comment from '../CommentSection/Comment.js'

=======
import './PostContainer.css'
>>>>>>> parent of 7a75442... add coments section and a bit of a form
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
<<<<<<< HEAD
<Comment userData = {props.userData} />
=======
>>>>>>> parent of 7a75442... add coments section and a bit of a form

     </div>
   )
}

export default Post
