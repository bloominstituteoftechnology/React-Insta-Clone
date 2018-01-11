import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

// function PostContainer(props) {
// 	const post = props.post;
// 	return (
// 		<div className="PostContainer">
// 			<div className="PostContainer_header">
// 				<img src={post.thumbnailURL}/>
// 				<h3 className="PostContainer_username">{post.username}</h3>
// 			</div>

// 			<div className="PostContainer_image">
// 				<img src={post.imageURL}/>
// 			</div>

// 			<div className="PostContainer_body">
// 				<div className="PostContainer_indications">
// 					<h3 className="PostContainer_likes">{post.likes} likes</h3>
// 				</div>

// 				<CommentSection comments={post.comments} timestamp={post.timestamp}/>
// 			</div>
// 		</div>
// 	);
// }

const PostContainer = (props) => {
	return (
		<div className="PostContainer">
			{props.post.map((container => {
				return (
					<div className="PostContainer">
						<div className="PostContainer_header">
							<img src={container.thumbnailUrl}/>
							<h3 className="PostContainer_username">{container.username}</h3>
						</div>

						<div className="PostContainer_image">
							<img src={container.imageUrl}/>
						</div>

						<div className="PostContainer_body">
							<div className="PostContainer_indications">
								<h3 className="PostContainer_likes">{container.likes} likes</h3>
							</div>

							<CommentSection comments={container.comments} timestamp={container.timestamp}/>
						</div>
					</div>
				);
			}))}
		</div>
	);
}

export default PostContainer;