import React from 'react';

const PostContainer = (props) => {
	return (
		<div>
			{props.instaData.map((item) => (
				<div key={item.timestamp} item={item}>
					{item.username}
				</div>
			))}
		</div>
	);
};
export default PostContainer;
