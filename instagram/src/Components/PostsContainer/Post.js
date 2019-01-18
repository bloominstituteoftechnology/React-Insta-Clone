import React from 'react';
import CommentSection from '../CommentSection /CommentSection';

const Post = (props) => {
	return (
		<div>
			{props.post.username} {props.post.likes}
			<img src={props.post.thumbnailUrl} alt="#" /> <img src={props.post.imageUrl} alt="#" />
			<CommentSection comments={props.post.comments} />
			{/* passing data from a component to another  */}
		</div>
	);
};
export default Post;
