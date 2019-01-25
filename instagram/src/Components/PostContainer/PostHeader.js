import React from 'react';

const PostHeader = (props) => {
	return (
		<div>
			<img src={props.thumbnailUrl} alt="#" />
			<div>{props.username}</div>
		</div>
	);
};

export default PostHeader;
