import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import '../../less/Post.less';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
	return (
		<main className="container">
			{props.posts.map((post, index) => (
				<section className="post" key={index}>
					<Post
						posts={post}
						username={post.username}
						thumbnail={post.thumbnailUrl}
						timestamp={post.timestamp}
						image={post.imageUrl}
						likes={post.likes}
						handleLike={props.handleLike}
					/>
					<CommentSection
						comments={post.comments}
						username={post.comments.username}
						text={post.comments.text}
					/>
				</section>
			))}
		</main>
	);
};

PostContainer.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string.isRequired,
			thumbnailUrl: PropTypes.string.isRequired,
			imageUrl: PropTypes.string.isRequired,
			likes: PropTypes.number,
			timestamp: PropTypes.string.isRequired,
			comment: PropTypes.arrayOf(
				PropTypes.shape({
					username: PropTypes.string,
					text: PropTypes.string
				})
			)
		})
	).isRequired
};
export default PostContainer;
