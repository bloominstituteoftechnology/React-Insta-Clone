import React from 'react';
import Post from './Post.js';
import './Post.css';

const PostContainer = props => {
	return (
		<div className="post-container">
			{props.post.map(posts => 
				<Post
					key={posts.imageUrl}
					post={posts}
				/>
			)}
		</div>
	);
};

export default PostContainer;