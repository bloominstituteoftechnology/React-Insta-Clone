import React from 'react';
import Heart from './heart.png';
import Comment from './comment.png';

const LikeSection = props => {
	return [
		<div className="like-container" key="icons" onClick={props.incrementLike}>
			<div className="like-wrapper">
				<img src={Heart} className="social"/>
			</div>
			<div className="like-wrapper">
				<img src={Comment} className="social"/>
			</div>
		</div>,
		<div className="like-container" key="likes">
			<div className="like-wrapper">
				<h2 className="likes">{props.likes} likes</h2>
			</div>
		</div>
	];
};

export default LikeSection;