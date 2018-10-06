import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import dummyData from '../dummy-data.js';

const PostContainer = (props) => {
	PostTitle = () => {
		return(
			<div className = "Post-Title">
				<img src={this.dummyData.thumbnailUrl} alt = "User-Thumbnail" className = "Post-Title-Img" />
				<div className="Post-Username">{this.dummyData.username}</div>
			</div>
		)
	}

	PostImg = () => {
		return(
			<img src={this.props.dummyData.imgageUrl} alt="Post-Image" className="Post-Img"/>
		)
	}

	render() {
		return(
			<div className = "Container">
				<div className = "Wrapper">
					<img src={this.props.dummyData.thumbnailUrl} alt="Profile-Image" className = "Profile-img"/>
					<div className = "Profile-Username">{this.props.dummyData.username}</div>
				</div>
				<img src={this.props.dummyData.imageUrl} alt="Post Image" className = "Posted-Image"/>
				{this.PostTitle()}
				{this.PostImage()}
			</div>
		)
	}
}

export default PostContainer;
