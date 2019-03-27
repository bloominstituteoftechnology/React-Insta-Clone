import React from "react";
import "./PostContainer.css";
import PostTopBar from "./PostTopBar";
import Likes from "../Likes/Likes";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const PostContainer = props => {
	return props.post.map(post => (
		<div key={post.id} className='post'>
			<PostTopBar post={post} />
			<div className='postImage'>
				<img src={post.imageUrl} alt='post' />
			</div>
			<div className='postBottomBar'>
				<Likes post={post} />

				<CommentSection comments={post.comments} timestamp={post.timestamp} />
			</div>
		</div>
	));
};

export default PostContainer;
