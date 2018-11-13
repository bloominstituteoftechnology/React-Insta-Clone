import React from 'react';
import like from '../../like.png';
import comment from '../../comment.png';

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

export default Post;
