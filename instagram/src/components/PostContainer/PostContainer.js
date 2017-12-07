import React, {Component} from "react";
import CommentSecion from "../CommentSection/CommentSection";
import "./PostContainer.css";

const PostContainer = ({ postData }) => {
	return (
		<div className="post-container">
			<div className="thumbnail">
				<img src={postData.thumbnailUrl} />
				<span><b>{postData.username}</b></span>
			</div>
			<div className="image">
				<img src={postData.imageUrl} />
			</div>
			<CommentSecion comments={postData.comments} />
		</div>
	);
};


export default PostContainer;