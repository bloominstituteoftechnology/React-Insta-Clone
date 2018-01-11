import React from 'react';

import './PostContainer.css';

import CommentSection from '../Comments/CommentSection.js'

function PostContainer(props) {
	const post = props.post;
	return (
		<div className="Post">
			<div className="Post-header">
				<img src={post.thumbnailUrl} />
				<h3 className="Post-username">{post.username}</h3>
			</div>

			<div className="Post-image">
				<img src={post.imageUrl} />
			</div>

			<div className="Post-body">
				<div className="Post-indications">
					<h3 className="Post-likes">{post.likes} likes</h3>
				</div>

				<CommentSection comments={post.comments} timestamp={post.timestamp} />
			</div>

		</div>
	);
};

export default PostContainer;