import React from 'react'
import PostHeader from './PostHeader'
import PostLikes from './PostLikes'
import CommentInput from "../CommentSection/CommentInput";
import CommentSection from "../CommentSection/CommentSection";
import './PostContainers.scss';

const PostContainer = ()=>{
	return (
		<div className="postContainer">
			<PostHeader/>
			<img className="heroImage" src="http://lorempixel.com/800/800"/>
			<div className="bottomContentContainer">
				<PostLikes />
				<CommentSection/>
				<time>2 HOURS AGO</time>
			</div>
			<CommentInput/>
		</div>
	)
}

export default PostContainer

