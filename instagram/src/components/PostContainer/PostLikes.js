import React from 'react'
import './PostContainers.scss';

const PostLikes = (props)=>{
	return (
		<div className="postLikeContainer">
			<button><i className=" far fa-heart"/></button>
			<button><i className="far fa-comment-alt"/></button>
			<p>{props.likes} likes</p>
		</div>
	)
}

export default PostLikes

