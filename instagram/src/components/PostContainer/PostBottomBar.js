import React from "react";

import CommentSection from "../CommentSection/CommentSection";

const PostBottomBar = props => {
	return (
		<div className='postBottomBar'>
			<div className='iconslikes'>
				<div className='icons'>
					<i class='far fa-heart' />
					<i class='far fa-comment' />
				</div>
				<div className='likes'>
					<p>{`${props.post.likes}` + " likes"}</p>
				</div>
			</div>
			<div className='commentSection'>
				<CommentSection comments={props.post.comments} />
			</div>
			<div className='timestamp'>
				<p>{props.post.timestamp}</p>
			</div>
			<div className='inputComment'>
				<form>
					<input type='text' placeholder='Add a comment...' />
				</form>
			</div>
		</div>
	);
};

export default PostBottomBar;
