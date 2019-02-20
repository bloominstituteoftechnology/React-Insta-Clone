import React from 'react';
import Post from "./Post";



const PostSection = props => {
	return (
		<div className= "postcontainer">

	
			{props.posts.map((post, index) => 
				<Post
					key={post.index}
					post={post}
				/>
			)}
		</div>
		
	);
};

export default PostSection;