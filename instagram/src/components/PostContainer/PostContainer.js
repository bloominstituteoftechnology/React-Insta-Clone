import React from 'react';
import Comment from '../CommentSection/CommentSection.js'
import './Post.css'
const PostContainer = props => {
	return (
		<div>
		<h1>{props.post.username}</h1>
	 	<Comment comment={props.post.comments} />
		</div>
	);
}

export default PostContainer;