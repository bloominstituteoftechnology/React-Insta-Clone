import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSectionContainer/CommentSection.js';
import LikeSection from './LikeSection.js';
import PostHead from './PostHead.js';
import './Post.css';


class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			like: props.post.likes
		};
	}

	incrementLike = () => {
		let likes = this.state.likes + 1;
		this.setState({ likes });
	}

	render() {
		return (
			<div className="post-bucket">
				<PostHead
					username={props.post.username}
					thumbnailUrl={props.post.thumbnailUrl}
				/>
				<div className="img-container">
					<img 
						src={props.post.imageUrl}
						alt="post image"
						className="post-image"
					/>
				</div>
				<LikeSection
					incrementLike={this.incrementLike}
					likes={this.state.likes}
				/>
				<CommentSection 
					comments={props.post.comments}
				/>
			</div>
		);	
	}
}

Post.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string,
		thumbnailUrl: PropTypes.string,
		imageUrl:PropTypes.string
	})
};

export default Post;
