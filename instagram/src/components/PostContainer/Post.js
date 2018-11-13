import React from 'react';
import like from '../../like.png';
import comment from '../../comment.png';
import PropTypes from 'prop-types';

const Post = (props) => {
	return (
		<React.Fragment>
			<section className="top">
				<div>
					<img src={props.posts.thumbnailUrl} alt="" />
					<h3>{props.posts.username}</h3>
				</div>

				<h4>{props.posts.timestamp}</h4>
			</section>
			<section className="middle">
				<img src={props.posts.imageUrl} alt="" />
			</section>
			<section className="bottom">
				<div className="icons">
					<img src={like} alt="like icon" />
					<img src={comment} alt="comment icon" />
				</div>
				<h3>
					<span>{props.posts.likes}</span> likes
				</h3>
			</section>
		</React.Fragment>
	);
};

Post.propTypes = {
	posts: PropTypes.shape({
			username: PropTypes.string.isRequired,
			thumbnailUrl: PropTypes.string.isRequired,
			imageUrl: PropTypes.string.isRequired,
			likes: PropTypes.number,
			timestamp: PropTypes.string.isRequired,
	}).isRequired		
}	
export default Post;
