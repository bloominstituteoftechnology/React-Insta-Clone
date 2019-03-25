import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostBottomBar = props => {
	return (
		<div className='postBottomBar'>
			<div className='iconslikes'>
				<div className='icons'>
					<i>iconshere</i>
				</div>
				<div className='likes'>
					<p>{`${props.post.likes}` + " likes"}</p>
				</div>
			</div>
			<div className='commentSection'>
				<CommentSection comments={props.post.comments} />
			</div>
		</div>
	);
};

export default PostBottomBar;
