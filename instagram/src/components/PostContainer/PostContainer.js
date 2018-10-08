import React from 'react';
import dummyData from '../../dummy-data.js';
import heart from '../../Img/likes.svg';
import comment from '../../Img/comment-regular.svg';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
	return (
		<React.Fragment>
			{dummyData.map((item) => {
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
								<img src={heart} alt="likes" className="heart" />
								<img src={comment} alt="" className="comment" />
							</div>
							<div className="likes">
								<h4>{item.likes} likes</h4>

								{item.comments.map((index) => {
									return (
										<h4 key={Math.floor(Math.random() * Math.floor(1000000))}>
											{index.username}
											<span className="comment"> {index.text}</span>
										</h4>
									);
								})}
								<div className="timeAgo">
									<p>{moment().startOf('day').fromNow()}</p>
								</div>
							</div>
						</div>
						<CommentSection />
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
