import React from 'react';
import CommentSection from '../CommentSectionContainer/CommentSection.js';
import PostHead from './PostHead.js';
import './Post.css'

const Post = props => {
	return (
		<div>
			<PostHead
				username={props.post.username}
				thumbnailUrl={props.post.thumbnailUrl}
			/>
			<img 
				src={props.post.imageUrl}
				alt="post image"
				className="post-image"
			/>
			<CommentSection 
				comments={props.psot.comments}
			/>
		</div>
	);
};

export default Post;
