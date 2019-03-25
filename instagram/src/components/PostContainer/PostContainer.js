import React from "react";
import "./PostContainer.css";
import PostTopBar from "./PostTopBar";
import PostBottomBar from "./PostBottomBar";

const PostContainer = props => {
	return props.post.map(post => (
		<div key={post.id} className='post'>
			<PostTopBar post={post} />
			<div className='postImage'>
				<img src={post.imageUrl} alt='post' />
			</div>
			<PostBottomBar post={post} />
		</div>
	));
};

export default PostContainer;
