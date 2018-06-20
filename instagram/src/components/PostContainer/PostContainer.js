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
		   		   
         <div className="likes-section">
           <div className="likes-icons">
               <i className="far fa-heart"></i>
               <i className="far fa-comment likes-comment-icon"></i>
           </div>
               <span className="likes-total">{props.data.likes} likes</span>
          </div>

		   <CommentSection commentData={props.data.comments} />
				<div>{props.data.timestamp}</div>
     </div> 
	)
};


export default PostContainer;