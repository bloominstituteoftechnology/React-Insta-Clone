import React from 'react'
import './PostContainers.scss';

const PostLikes = (props)=>{
	return (
		<div>
			<i className="fal fa-heart"/>
			<i className="fal fa-comment"/>
			<p>373 likes</p>
		</div>
	)
}

export default PostLikes

