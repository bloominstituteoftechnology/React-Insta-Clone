import React from 'react'
import Post from './Post'

const PostsContainer = ({ posts }) => {
	return (
		<div className='posts-container-wrapper'>
			{posts.map(post => (
				<Post key={post.imageUrl} post={post} />
			))}
		</div>
	)
}

export default PostsContainer
