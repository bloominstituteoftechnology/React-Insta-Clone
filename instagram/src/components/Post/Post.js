import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css';

const Post = props => {
	return (
		<article
			className="Post"
			id={props.post.username + '/' + props.post.timestamp}
		>
			<section className="author">
				<a href="/" className="thumbnail">
					<img src={props.post.thumbnailUrl} alt={props.post.username} />
				</a>
				<a href="/" className="username">
					{props.post.username}
				</a>
			</section>

			<img
				src={props.post.imageUrl}
				alt={props.post.username + ': ' + props.post.timestamp}
				className="post-image"
			/>

			<CommentSection
				likes={props.post.likes}
				comments={props.post.comments}
				timestamp={props.post.timestamp}
			/>
		</article>
	);
};

Post.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string,
		thumbnailUrl: PropTypes.string,
		imageUrl: PropTypes.string,
		likes: PropTypes.number,
		timestamp: PropTypes.string,
		comments: PropTypes.arrayOf(PropTypes.object)
	})
};

export default Post;
