import React from 'react';
import './post-container.css';
import CommentSection from '../CommentSection/CommentSection';
import IconHeaderBar from '../PostContainer/IconHeaderBar';


const PostContainer = (props) => (
    <div className = 'post'>
    <div className='post-header'>
      <img className='user-thumb' src={props.post.thumbnailUrl} />
      <div>
       <p className='user'> {props.post.username}</p>
        <p className='location'>Vail, Colorado </p>
        </div>
        </div>
       <img className='post-image-fullsize' src={props.post.imageUrl} />  
       <div className='post-bottom'>
       <IconHeaderBar likes = {props.post.likes}/> 
<CommentSection comments = {props.post.comments}/>
</div>
    </div>
);

export default PostContainer;
