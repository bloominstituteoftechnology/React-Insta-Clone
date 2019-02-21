import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js'



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
		return(
		    <div>
				<div>
				 	  <img src={this.props.user.imageUrl} alt="User"/>
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