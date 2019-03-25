import React from "react";
// import Moment from "react-moment";
import moment from "moment";

import CommentSection from "../CommentSection/CommentSection";
// import "moment-timezone";

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
			{/* {moment().props.post.timestamp} */}
			{/* <Moment format='YYYY/MM/DD'>{props.post.timestamp}</Moment> */}
			{props.post.timestamp}
		</div>
	);
};

export default PostBottomBar;
