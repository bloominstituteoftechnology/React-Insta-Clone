import React from 'react';
import Heart from "../images/heart.png";
import Comment from "../images/comment.png";

const LikeSection = props => {
	return (
		<div className="like-container"  onClick={props.incrementLike}>
			<img src={Heart} className="social" alt= "heart"/>
			<img src={Comment} className="social" alt= "comment"/>
			<h2 className="likes">{props.likes} likes</h2>
			
		</div>
	)
}

export default LikeSection;
