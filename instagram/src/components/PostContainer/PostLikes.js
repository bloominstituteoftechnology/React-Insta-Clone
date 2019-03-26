import React from 'react'
import './PostContainers.scss';

const PostLikes = (props)=>{
	console.log('id', props.id)
	return (
		<div className="postLikeContainer">
			<button onClick={props.onLikeClick}><i className=" far fa-heart"/></button>
			<button><i className="far fa-comment-alt"/></button>
			<p>{props.likes} likes</p>
		</div>
	)
}

export default PostLikes

