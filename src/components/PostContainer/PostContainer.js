import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import dummyData from '../dummy-data.js';

const PostContainer = (props) => {
	return(
		<div className="Container">
			<div className="Wrapper">
				<img src={dummyData.thumbnailUrl}/>
				{dummyData.username}
			</div>

			<img className="Post-Img" src={dummyData.imageUrl}/>

			<div className="Post-Buttons">
				<i className="Heart"></i>
				<i className="Comment"></i>
			</div>

			<div className="Likes">
				{dummyData.likes} likes
			</div>
			<CommentSection conent={dummyData.comments}/>
		</div>
	)
}

export default PostContainer;
