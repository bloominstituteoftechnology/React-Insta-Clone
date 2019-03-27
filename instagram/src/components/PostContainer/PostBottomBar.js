import React from "react";
import "./PostContainer.css";
import PostTopBar from "./PostTopBar";
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

// class PostBottomBar extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			post: props
// 		};
// 	}

// 	render() {
// 		return (
// 			<div className='postBottomBar'>
// 				<div className='iconslikes'>
// 					<div className='icons'>
// 						<i className='far fa-heart' />
// 						<i className='far fa-comment' />
// 					</div>
// 					<div className='likes'>
// 						<p>{`${this.state.post.likes}` + " likes"}</p>
// 					</div>
// 				</div>

// 				<CommentSection
// 					comments={this.state.post.comments}
// 					timestamp={this.state.post.timestamp}
// 				/>
// 			</div>
// 		);
// 	}
// }

export default PostBottomBar;
