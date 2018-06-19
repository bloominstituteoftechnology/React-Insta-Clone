import React from 'react';
import './post-container.css';
import CommentSection from '../CommentSection/CommentSection';
import IconHeaderBar from '../PostContainer/IconHeaderBar';
import AddAComment from '../CommentSection/AddAComment';

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
<AddAComment />
</div>
    </div>
);

export default PostContainer;
