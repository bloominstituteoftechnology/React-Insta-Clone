import React from 'react';
import {LikeContainerStyle, LikeSectionIcons, LikeSectionNumbers} from '../ReusableStyles/ReusableStyles';
import './PostContainer.css';

const LikeSection = props => {

	return(
		<div >

		<LikeContainerStyle>

		<LikeSectionIcons onClick={props.incrementLikes}>
		<i className="far fa-heart" />
		</LikeSectionIcons>

		<LikeSectionIcons>
                <i className="far fa-comment" />
                </LikeSectionIcons>

		</LikeContainerStyle>

	
		<LikeSectionNumbers>{props.Likes} likes</LikeSectionNumbers>

		</div>
	);



}


export default LikeSection;
