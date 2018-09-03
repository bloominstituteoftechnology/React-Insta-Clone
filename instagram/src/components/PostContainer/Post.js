import React from 'react';
import CommentList from '../CommentSection/CommentList';
import PropTypes from 'prop-types';
import './posts.css';
import h from './h.png';
import c from './c.png';

const Post = (props) => {
	return (
		<section className="post-section">
			<div className="post-section-1">
				<img src={props.post.thumbnailUrl} className="thumb" alt={"thumb"}/>
				<p>{props.post.username}</p>
			</div>
			<img src={props.post.imageUrl} className="post-img" alt={"post-img"}/>
			<div className="post-section-2">
				<img src={h} className="status-img" alt={"heart"} onClick={props.UP} id={props.id}/>
				<img src={c} className="status-img" alt={"comment"}/>
				<p>{props.post.likes} Likes</p>
			</div>
			<div className="post-section-3">
				<CommentList comments={props.post.comments} />
			</div>
		</section>
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