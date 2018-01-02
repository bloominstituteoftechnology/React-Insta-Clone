import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = ( {postData} ) => (
	<div classname="PostContainer">
	  <img src={postData.thumbnailUrl} />
	  <span>{postData.username}</span>
	  <img src={postData.imageUrl} />
	  <div>{postData.likes}</div>
	  <div>{postData.timestamp}</div>
		<CommentSection comments={postData.comments} />
	</div>
	

);

export default PostContainer;