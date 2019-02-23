import React from 'react';
import { LikeSectionWrapper } from './PostStyles';

const LikeSection = (props) => {
	return [
		<div className="like-section" key="likes-icons-container" onClick={props.incrementLike}>
			<LikeSectionWrapper>
				<i className="far fa-heart" />
			</LikeSectionWrapper>
			<LikeSectionWrapper>
				<i className="far fa-comment" />
			</LikeSectionWrapper>
		</div>,
		<div className="like-section" key="likes-container">
			<LikeSectionWrapper>{props.likes}</LikeSectionWrapper>
		</div>
	];
};

export default LikeSection;
