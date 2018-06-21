import React from 'react';
import './post-container.css';
import CommentSection from '../CommentSection/CommentSection';



const PostContainer = (props) => (
    <div className = 'post'>
    <div className='post-header'>
      <img className='user-thumb' src={props.post.thumbnailUrl} alt ={'user thumbnail'} />
      <div>
       <p className='user'> {props.post.username}  </p>
        <p className='location'>Vail, Colorado </p>
        </div>
        </div>
       <img className='post-image-fullsize' src={props.post.imageUrl} alt ={'fullsize user post'}/>  
       <div className='post-bottom'>
       
<CommentSection likeIndex={props.post.thumbnailUrl + 'liked'} postIndex = {props.post.thumbnailUrl} likes = {props.post.likes} comments = {props.post.comments}/>
</div>
    </div>
);

export default PostContainer;
