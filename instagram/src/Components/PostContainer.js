import React from 'react';
import dummyData from '../dummy-data';
const PostContainer = () => {
	return (
		<header>
			{dummyData.map((data) => (
				<div key={data.username}>
					{data.thumbnailUrl} {data.imageUrl}
				</div>
			))}
		</header>
	);
};
export default PostContainer;
