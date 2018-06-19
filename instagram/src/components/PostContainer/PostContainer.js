import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


const PostContainer = props  => {
		return (
		   <div className="post-container">
		   	
		   	<div className="heading">
		   		<img src="{props.data.thumbnaiURL}" alt="thumbnail" />
		   	  <h1>{props.data.username}</h1>
		   	</div> 

		   		<img src="{props.data.imageURL}" alt="pic of user" />
		   
		   <div className="comment-box">
       <input placeholder="Add a Comment Here..." name="textbox" className="textbox"/>
    	 </div> 
     </div> 
	)
};


export default PostContainer;