import React from 'react';
import './PostContainer.css';
import Post from './Post.js'


const PostContainer = props => {
	return (
		<div className='postContainer'>
			{props.post.map(posts => 
				<Post
					key={posts.imageUrl}
					post={posts}
				/>
                
            )}
         
            
		</div>
       
	);
};
 export default PostContainer; 