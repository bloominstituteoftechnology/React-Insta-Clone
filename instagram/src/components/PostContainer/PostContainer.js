import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainerStyle = styled.main`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: space-between;
	margin: 0.5% 0 0;
	padding: 5%;
	max-width: 800px;
`;
const PostSection = styled.section`
	border: 1px solid black;
	border-radius: 10px;
	background: #418e7f;
	width: 100%;
	height: auto;
	margin: 0 0 10%;
	padding: 0;
`;

const PostContainer = (props) => {
	return (
		<PostContainerStyle>
			{props.posts.map((post, index) => (
				<PostSection className="post" key={index}>
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
				</PostSection>
			))}
		</PostContainerStyle>
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
