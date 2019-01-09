import React from 'react';
import PostHeader from './PostHeader.js';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
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
			<CommentSection comments={props.post.comments} />
		</div>
	);
};
 export default Post;