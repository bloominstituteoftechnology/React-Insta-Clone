import React from 'react';

import './PostContainer.css';

import CommentSection from '../Comments/CommentSection.js'

function PostContainer(props) {
	const post = props.post;
	return (
		<div className="Posts">
			<div className="Post-head">
				<img src={post.thumbnailUrl} />
				<h3 className="Post-username">{post.username}</h3>
			</div>

			<div className="Post-img">
				<img src={post.imageUrl} />
			</div>

			<div className="Post-body">
				<div className="Post-indicators">
					<h3 className="Post-likes">{post.likes} likes</h3>
				</div>

				<CommentSection comments={post.comments} timestamp={post.timestamp} />
			</div>

		</div>
	);
};

export default PostContainer;