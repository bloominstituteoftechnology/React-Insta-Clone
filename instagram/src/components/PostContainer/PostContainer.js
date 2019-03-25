import React from "react";
import "./PostContainer.css";
import PostTopBar from "./PostTopBar";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
	return props.post.map(post => (
		<div key={post.id} className='post'>
			<PostTopBar post={post} />
			<div className='postImage'>
				<img src={post.imageUrl} alt='post' />
			</div>
			{/* <PostBottomBar post={post} /> */}
			<div className='postBottom'>
				<h1> holder</h1>
				<p>{`${post.likes}` + " likes"}</p>
				{/* <CommentSection /> */}
			</div>
		</div>
	));
};

export default PostContainer;
