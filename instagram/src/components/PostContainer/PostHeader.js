import React from 'react';

const PostHeader = props => {
	return (
		<div className='postHead' >
				<img className='userIcon' src={props.thumbnailUrl} alt='userIcon'/>
			<div className='postHeadUsername'>
				{props.username}
			</div>
		</div>
	);
};
 export default PostHeader;