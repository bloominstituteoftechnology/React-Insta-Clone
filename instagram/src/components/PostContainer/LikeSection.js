import React from 'react';
import './PostContainer.css';

const LikeSection = props => {

	return(
		<div >

		<div className="like-container-style">

		<div className="like-section-icons" onClick={props.incrementLikes}>
		<i className="far fa-heart" />
		</div>

		<div className="like-section-icons">
                <i className="far fa-comment" />
                </div>

		</div>

	
		<div className="like-section-numbers">{props.Likes} likes</div>

		</div>
	);



}


export default LikeSection;
