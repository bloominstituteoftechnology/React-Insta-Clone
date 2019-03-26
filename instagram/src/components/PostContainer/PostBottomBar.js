import React from "react";

import CommentSection from "../CommentSection/CommentSection";

const PostBottomBar = props => {
	return (
		<div className='postBottomBar'>
			<div className='iconslikes'>
				<div className='icons'>
					<i className='far fa-heart' />
					<i className='far fa-comment' />
				</div>
				<div className='likes'>
					<p>{`${props.post.likes}` + " likes"}</p>
				</div>
			</div>

			<CommentSection
				comments={props.post.comments}
				timestamp={props.post.timestamp}
			/>
		</div>
	);
};

export default PostBottomBar;
