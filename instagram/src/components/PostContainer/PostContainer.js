import React from "react";

function PostContainer(props) {
	return props.post.map(post => (
		<div key={post.id} className='post'>
			<div className='postTopBar'>
				<img src={post.thumbnailUrl} alt='thumbnail' /> <h1>{post.username}</h1>
			</div>
			<div className='postImage'>
				<img src={post.imageUrl} alt='post' />
			</div>
			<div className='postBottom'>
				<h1> holder</h1>
				<p>{`${post.likes}` + " likes"}</p>
			</div>
		</div>
	));
}

export default PostContainer;
