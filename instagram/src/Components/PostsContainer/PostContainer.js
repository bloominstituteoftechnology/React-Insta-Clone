import React from 'react';
import Post from './Post';
const PostContainer = (props) => {
	return (
		<div>
			{props.instaData.map((item, timestamp) => {
				console.log(item);
				return (
					<div key={timestamp}>
						{' '}
						<Post post={item} />{' '}
					</div>
				);
			})}
		</div>
	);
};
export default PostContainer;
