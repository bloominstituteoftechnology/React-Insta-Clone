import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'

const PostContainer = props => {
	return (
		<div className="postContainer">
			<div className="user-data">
				<img className="user-img" src={props.postObject.thumbnailUrl} alt=""/>
				<div className="username">{props.postObject.username}</div>
       </div>

		<img className="post-img" src={props.postObject.imageUrl} alt=""/>
		<p className="likes">{props.postObject.likes+' likes'}</p>
		<CommentSection commentArray = {props.postObject.comments} addNewComment={props.addNewComment}/>
    </div>
    );
}

export default PostContainer;
