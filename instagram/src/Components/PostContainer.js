import React from 'react';
import CommentSection from "./Components/CommentSection";
import Post from "./Components/post";



const PostContainer = props => {
	return (
		<div className= "postcontainer">

	<div className="post-container">
	
			{props.post.map(posts => 
				<Post
					key={posts.imageUrl}
					post={posts}
				/>
			)}
		</div>
	);
		</div>
	);
};

export default PostContainer;