import React from 'react';
import CommentSection from '../CommentSectionContainer/CommentSection.js';
import PostHead from './PostHead.js';
import './Post.css'

const Post = props => {
	return (
		<div className="post-bucket">
			<PostHead
				username={props.post.username}
				thumbnailUrl={props.post.thumbnailUrl}
			/>
			<div className="img-container">
				<img 
					src={props.post.imageUrl}
					alt="post image"
					className="post-image"
				/>
			</div>
			<CommentSection 
				comments={props.post.comments}
			/>
		</div>
	);
};

export default Post;
