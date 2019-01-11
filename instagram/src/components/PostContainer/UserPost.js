import React from 'react';
import PropTypes from 'prop-types';
// import './UserTitle.css'
import heart from '../../data/pics/heart.png'
import comment from '../../data/pics/comment.png'
import CommentSection from '../CommentSection/CommentSection.js'
import styled from 'styled-components'

// import UserComments from './UserComments'
// import LikeSection from './LikeSection'


class UserPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: props.user.likes
		};
	}
	incrementLike = () => {
		// console.log('hi')
		let likes = this.state.likes + 1;
		this.setState({ likes });
	};

	render() {

		const UserThumbnail = styled.img `
			width: 40px;
			border-radius: 20px;
		`

		const Username = styled.h4 `
			margin: 0px 0px 0px 10px;
		`

		const MainTitle = styled.div`
			display:flex;
			align-items:center;
		`

		const LikeIcon = styled.img `
			width: 40px;
			border-radiu: 20px;
		`			

		return(
				<div className ="user_title">
					<MainTitle>
						<UserThumbnail src ={ this.props.user.thumbnailUrl }></UserThumbnail>
						<Username>{this.props.user.username}</Username>
					</MainTitle>



					<div>
						<img src={this.props.user.imageUrl} alt="User"/>
					</div>


					<div>
			  			<LikeIcon src= {heart} onClick={this.incrementLike}></LikeIcon>
			  			<LikeIcon src= {comment}></LikeIcon>

					</div>

					<div>
						<h3>{this.state.likes} Likes</h3>
					</div>

					<div>
						<CommentSection 
							key={this.props.imageUrl} 
							comments = {this.props.user.comments}/>
					</div>
				</div>
		)
	}
}

UserPost.propTypes = {
	User: PropTypes.shape({
		username: PropTypes.string,
		thumbnailUrl: PropTypes.string,
		imageUrl: PropTypes.string
	})
};


export default UserPost;