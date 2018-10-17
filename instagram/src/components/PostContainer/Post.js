import React from 'react';
import PostHeader from './PostHeader.js';
const Post = props => {
	return (
		<div className='postData'>
			
			
			
			<PostHeader
				username={props.post.username}
				// username, text
				thumbnailUrl={props.post.thumbnailUrl}
				// user profile icon
			/>
			
			<div className='postImg'>
				<img src={props.post.imageUrl} alt='post'
				// post image
				/>
				
			</div>
		</div>
	);
};
 export default Post;