import React from 'react';
import './PostContainer.css';
import Post from './Post.js'
// import CommentSection from './CommentSection/CommentSection'

const PostContainer = props => {
	return (
		<div className='postContainer'>
			{props.post.map(posts => 
				<Post
					key={posts.imageUrl}
					post={posts}
				/>
                
            )}
            {/* <CommentSection /> will go here */}
            
		</div>
       
	);
};
 export default PostContainer; 