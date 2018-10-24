import React from 'react';
import PropTypes from 'prop-types';
import "./postcontainer.css";
import CommentSection from "./components/CommentSection";
import Heart from "./Images/heart.png";
import Comment from "./Images/comment.png";



const LikeSection = props => {
	return [
		<div className="like-container" key="icons" onClick={props.incrementLike}>
			<div className="like-wrapper">
				<img src={Heart} className="social" alt= "heart"/>
			</div>

			<div className="like-wrapper">
				<img src={Comment} className="social" alt= "comment"/>
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
