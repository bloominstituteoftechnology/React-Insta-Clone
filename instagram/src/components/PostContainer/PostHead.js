import React from 'react';
import './Post.css';

const PostHead = props => {
	return (
		<div className="posthead-container">
			<div className="thumbnail-container">
				<img src={props.thumbnailUrl} alt="User" className="post-thumbnail"/>
			</div>
			<div>
				{props.username}
			</div>
		</div>
	);
};

export default PostHead;