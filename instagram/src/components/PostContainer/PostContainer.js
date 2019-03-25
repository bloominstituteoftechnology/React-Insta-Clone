import React from 'react'
import PostHeader from './PostHeader'
import PostLikes from './PostLikes'
import CommentInput from "../CommentSection/CommentInput";
import CommentSection from "../CommentSection/CommentSection";
import './PostContainers.scss';

const PostContainer = ()=>{
	return (
		<div>
			<PostHeader/>
			<img className="heroImage" src="http://lorempixel.com/800/800"/>
			<div>
				<PostLikes />
				<CommentSection/>
				<p>2 HOURS AGO</p>
			</div>
			<CommentInput/>
		</div>
	)
}

export default PostContainer

