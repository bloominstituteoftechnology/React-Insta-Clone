import React from 'react';
import CommentList from '../CommentSection/CommentList';
import PropTypes from 'prop-types';

// import PostList from './components/PostContainer/PostList'


const Post = (props) => {
	return (
		<div>
			<ul>
				<li>User Name: {props.post.username}</li>
				<li>ThumbnailURL: {props.post.thumbnailUrl}</li>
				<li>ImageURL: {props.post.imageUrl}</li>
				<li>Likes: {props.post.likes}</li>
				<li>timestamp: {props.post.timestamp}</li>
			</ul>
			<div>
				<CommentList comments={props.post.comments} />
				<input type='text-area'/><br />
				<button>click here to comment</button>
			</div>
		</div>
	)
}


Post.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		imageUrl: PropTypes.string,
		likes: PropTypes.number,
		thumbnailUrl: PropTypes.string,
		timestamp: PropTypes.string,
		username: PropTypes.string,
	})
}

export default Post;