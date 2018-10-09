import React from 'react';
// import dummyData from '../../dummy-data.js';
import Likes from '../Images/Likes.js';
import Comment from '../Images/Comment.js';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
	if (!props.dummyData.length) {
		return (
			<div className="sk-circle">
				<div className="sk-circle1 sk-child" />
				<div className="sk-circle2 sk-child" />
				<div className="sk-circle3 sk-child" />
				<div className="sk-circle4 sk-child" />
				<div className="sk-circle5 sk-child" />
				<div className="sk-circle6 sk-child" />
				<div className="sk-circle7 sk-child" />
				<div className="sk-circle8 sk-child" />
				<div className="sk-circle9 sk-child" />
				<div className="sk-circle10 sk-child" />
				<div className="sk-circle11 sk-child" />
				<div className="sk-circle12 sk-child" />
			</div>
		);
	}
	return (
		<React.Fragment>
			{props.dummyData.map((item) => {
				return (
					<div className="postContainer" key={item.timestamp}>
						<div className="userName">
							<img src={item.thumbnailUrl} alt="user thumbnail" />
							<h4>{item.username}</h4>
						</div>
						<div className="imageContainer">
							<div className="mainImagePost">
								<img src={item.imageUrl} alt="User post" />
							</div>
							<div className="postStats">
								<Likes />
								<Comment />
							</div>
							<div className="likes">
								<h4>{item.likes} likes</h4>
								{item.comments.map((index) => {
									return (
										<h4 key={Math.floor(Math.random() * Math.floor(1000000))}>
											{index.username}
											<span className="comments"> {index.text}</span>
										</h4>
									);
								})}
								<div className="timeAgo">
									<p>{moment().startOf('day').fromNow()}</p>
								</div>
							</div>
						</div>
						<CommentSection changeHander={props.addNewComment} name="comment" value={props.value} />
					</div>
				);
			})}
		</React.Fragment>
	);
};

PostContainer.propTypes = {
	key: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
	thumbnailUrl: PropTypes.string,
	username: PropTypes.string,
	imageUrl: PropTypes.string,
	likes: PropTypes.number,
	timestamp: PropTypes.string,
	comments: PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string
	})
};

export default PostContainer;
