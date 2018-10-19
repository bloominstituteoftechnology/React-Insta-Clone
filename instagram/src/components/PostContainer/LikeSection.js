import React from 'react';
import Heart from './heart.png';
import Comment from './comment.png';
import './Post.css'

const LikeSection = props => {
	return [
		<div className="like-container" key="likes">
			<div>
				<p className="likes"><strong>{props.likes} likes</strong></p>
			</div>
		</div>,
		<div className="like-container" key="icons" onClick={props.incrementLike}>
			<div className="like-wrapper">
				<img src={Heart} className="social"/>
			</div>
			<div className="like-wrapper">
				<img src={Comment} className="social"/>
			</div>
		</div>
	];
};

export default LikeSection;