import React from "react";

const PostBottomBar = props => {
	return (
		<div className='postBottomBar'>
			<div className='iconslikes'>
				<div className='icons'>
					<i>iconshere</i>
				</div>
				<div className='likes'>
					<p>{post.likes}</p>
				</div>
			</div>
		</div>
	);
};

export default PostBottomBar;
