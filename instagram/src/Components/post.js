import React from 'react';
import CommentSection from "./Components/CommentSection";



const Post = props => {
	return (
		<div>
			<PostContainer
				username={props.post.username}
				thumbnailUrl={props.post.thumbnailUrl}
			/>
			<img 
				src={props.post.imageUrl}
				alt="post image"
				className="post-image"
			/>
			<CommentSection 
				comments={props.post.comments}
			/>
		</div>
	);
};

export default Post;