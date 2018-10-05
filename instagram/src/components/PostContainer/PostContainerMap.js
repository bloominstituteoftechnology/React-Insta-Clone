import React from 'react';
import PostContainer from './index.js';

const PostContainerList = props => {
	return (
		<div>
			{props.data.map((userPost) => {
				return (
					<div className='post-container-list'>
						<PostContainer userData={userPost} />
					</div>
				)
			})}
		</div>
	)
}

export default PostContainerList;