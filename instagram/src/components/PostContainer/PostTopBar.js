import React from "react";

const PostTopBar = props => {
	return (
		<div className='postTopBar'>
			{console.log(props)}
			<img src={props.post.thumbnailUrl} alt='thumbnail' />{" "}
			<h1>{props.post.username}</h1>
		</div>
	);
};

export default PostTopBar;
