import React from 'react'
import './PostContainers.scss';

const PostLikes = (props)=>{
	const getLikedElement = ()=>{
		if(props.likedPosts[props.postId]){
			return <i className="fas fa-heart"/>
		}else{
			return <i className="far fa-heart"/>
		}
	}
	return (
		<div className="postLikeContainer">
			<button onClick={props.onLikeClick}>{getLikedElement()}</button>
			<button><i className="far fa-comment-alt"/></button>
			<p>{props.likes} likes</p>
		</div>
	)
}

export default PostLikes

