import React from 'react'
import './PostContainers.scss';

const PostHeader = (props)=>{
	return (
		<header>
			<img className="userImage" src={props.imageUrl} alt="user"/>
			<span>{props.username}</span>
		</header>
	)
}

export default PostHeader

