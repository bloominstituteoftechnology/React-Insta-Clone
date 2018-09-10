import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostContainer(props) {
	return (
		<div className="post-container">
			{props.posts.map((post) => (
				<Post key={post.imageUrl} post={post} />
			))}
		</div>
	);
}

PostContainer.PropTypes = {
	post: PropTypes.arrayOf(PropTypes.object),
};

export default PostContainer;
