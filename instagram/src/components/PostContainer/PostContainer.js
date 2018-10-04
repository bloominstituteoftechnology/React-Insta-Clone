import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js'

const PostContainer = props => {
	return (
		<div>
		<h1>{props.post.username}</h1>
	 	<CommentSection />
		</div>
	);
}

export default PostContainer;