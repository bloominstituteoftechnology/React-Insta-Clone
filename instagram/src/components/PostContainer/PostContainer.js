import React from "react";
import "./PostContainer.css";
import PostTopBar from "./PostTopBar";
import Likes from "../Likes/Likes";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
	return props.post.map(post => (
		<div key={post.id} className='post'>
			<PostTopBar post={post} />
			<div className='postImage'>
				<img src={post.imageUrl} alt='post' />
			</div>
			{/* <PostBottomBar post={post} /> */}
			<div className='postBottomBar'>
				{/* <div className='iconslikes'>
					<div className='icons'>
						<i className='far fa-heart' />
						<i className='far fa-comment' />
					</div> */}
				{/* <div className='likes'>
						<p>{`${post.likes}` + " likes"}</p>
					</div> */}
				<Likes post={post} />
				{/* </div> */}

				<CommentSection comments={post.comments} timestamp={post.timestamp} />
			</div>
		</div>
	));
};

// class PostContainer extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			post: props.post
// 		};
// 	}
// 	render() {
// 		console.log(this.state.post);
// 		return props.post.map(post => (
// 			<div key={post.id} className='post'>
// 				<PostTopBar post={post} />
// 				<div className='postImage'>
// 					<img src={post.imageUrl} alt='post' />
// 				</div>
// 				{/* <PostBottomBar post={post} /> */}
// 				<div className='postBottomBar'>
// 					<div className='iconslikes'>
// 						<div className='icons'>
// 							<i className='far fa-heart' />
// 							<i className='far fa-comment' />
// 						</div>
// 						<div className='likes'>
// 							<p>{`${post.likes}` + " likes"}</p>
// 						</div>
// 					</div>

// 					<CommentSection comments={post.comments} timestamp={post.timestamp} />
// 				</div>
// 			</div>
// 		));
// 	}
// }

export default PostContainer;
