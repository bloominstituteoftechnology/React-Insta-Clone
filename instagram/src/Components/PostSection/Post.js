import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "../Likes/Likes";
import PostHead from "./PostHead";
import './PostSection.css';


class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			like: props.post.likes
		};
	
	}

	incrementLike = () => {
		let likes = this.state.like + 1;
		this.setState({ likes });
	}

	render() {

		return (
			<div className="post-drop">
				<PostHead
					username={this.props.post.username}
					thumbnailUrl={this.props.post.thumbnailUrl}
				/>
				<div className="img-container">
					<img 
						src={this.props.post.imageUrl}
						alt="postpic"
						className="post-image"
					/>
				</div>
				<LikeSection
					incrementLike={this.incrementLike}
					likes={this.state.likes}
				/>
				<CommentSection 
					comments={this.props.post.comments}
				/>
			</div>
		);	
	}
}



Post.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string,
		thumbnailUrl: PropTypes.string,
		imageUrl: PropTypes.string,
	})
};




export default Post;