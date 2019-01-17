import React from 'react';

const PostContainer = (props) => {
	return (
		<div>
			{props.instaData.map((item) => (
				<div key={item.timestamp} item={item}>
					{item.username} {item.likes} <img src={item.thumbnailUrl} alt="#" />{' '}
					<img src={item.imageUrl} alt="#" />
				</div>
			))}
		</div>
	);
};
export default PostContainer;
