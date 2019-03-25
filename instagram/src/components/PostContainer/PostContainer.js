import React from "react";

function PostContainer(props) {
	console.log(props);
	return <h1>{props.posts.username}</h1>;
}

export default PostContainer;
