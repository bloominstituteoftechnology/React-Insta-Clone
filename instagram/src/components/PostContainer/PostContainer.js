import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


const PostContainer = props  => {
		return (
		   <div className="post-container">
		   	
		   	<div className="heading">
		   		 <img className="post-thumbnail-img" src={props.data.thumbnailUrl} alt="thumbnail pic" />
		   	  <h1 className="post-name">{props.data.username}</h1>
		   	</div> 

		   	<img className="post-img" src = {props.data.imageUrl} alt="instagram pic" />
		   <CommentSection commentData={props.data.comments} />
		   <div className="comment-box">
       <input placeholder="Add a Comment Here..." name="textbox" className="textbox"/>
    	 </div> 
     </div> 
	)
};


export default PostContainer;