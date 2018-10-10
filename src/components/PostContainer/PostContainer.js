import React from 'react';
import dummyData from '../dummy-data.js';

const PostContainer = (props) => {
	return(
		<div>
			{props.userData.map((data, index) =>
			<div key={'post '+index}>
				<div>
					<img src={data.thumbnailUrl} alt="user-thumbnail"/>
					<span>{data.username}</span>
					</div>
				</div>)}
		</div>
	);
}

export default PostContainer;
