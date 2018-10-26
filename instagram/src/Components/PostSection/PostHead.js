import React from 'react';
import './PostSection.css';

const PostHead = props => {
	return (
		<div className="posthead-container">

			<div className="thumbnail-container">
				<img className="post-image" src={props.thumbnailUrl} 
				alt="User" className="post-thumbnail"/>

				<div className="user-name">
				{props.username}
			</div>
			</div>
            
			
		</div>
	);
};

export default PostHead;