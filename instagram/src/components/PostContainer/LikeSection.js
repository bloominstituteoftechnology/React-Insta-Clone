import React from 'react';
import './PostContainer.css';

const LikeSection = props => {

	return(
		<div className="like-container-style">
		
		<div className="like-section-icons" onClick={props.incrementLikes}>
		<i className="far fa-heart" />
		</div>

		<div className="like-section-icons">
                <i className="far fa-comment" />
                </div>

		<div className="like-section-icons">{props.Likes}</div>

		</div>
	);



}


export default LikeSection;
