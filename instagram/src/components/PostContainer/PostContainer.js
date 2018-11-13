import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types'
import '../../less/Post.less';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
	return (
		<main className="container">
			{props.posts.map((post) => (
				<section className="post">
					<Post posts={post} />
					<CommentSection
						AddComment={props.AddComment}
						commentInput={props.commentInput}
						handleChange={props.handleChange}
						posts={post}
					/>
				</section>
			))}
		</main>
	);
};

PostContainer.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.shape({
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
		),
		AddComment: PropTypes.func,
		commentInput: PropTypes.string,
		handleChange: PropTypes.func
	})).isRequired
};
export default PostContainer;
