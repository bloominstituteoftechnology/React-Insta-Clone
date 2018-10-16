import React from 'react'
import './Post.css'

const Post = (props) => {
	return (
		<div>
		<div className="postHeader">
			<img className="headerImg" alt="thumbnail" src={props.thumbnailUrl} />
			  <h3>{props.username}</h3>
		  </div>
		  <div className="imageContainer">
			  <img alt="post" src={props.imageUrl} className="postImg" />
		  </div>
		</div>
	)
}


export default Post;