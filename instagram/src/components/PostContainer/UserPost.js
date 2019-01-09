import React from 'react';
import PropTypes from 'prop-types';
import './UserTitle.css'
import heart from '../../data/pics/heart.png'
import comment from '../../data/pics/comment.png'
import CommentSection from '../CommentSection/CommentSection.js'
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
		// console.log(this.props)
		return(
				<div className ="user_title">
					<div className ="title" >
			  			<img className ="userImgPic" src = {this.props.user.thumbnailUrl} alt ="Heart"/>
						<h4>{this.props.user.username}</h4>
					</div>

					<div>
						<img src={this.props.user.imageUrl} alt="User"/>
					</div>

					<div>
			  			<img className ="userImgPic" src = {heart} alt ="Heart" onClick ={this.incrementLike}/>
			  			<img className ="userImgPic" src = {comment} alt ="Heart"/>
					</div>

					<div >
						<h3 >{this.state.likes} Likes</h3>
					</div>

					<div>
						{/*this.props.user.comments.map( comment => {
							return (
								<UserComments
								comment = {comment}/>
							)
						})*/}

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