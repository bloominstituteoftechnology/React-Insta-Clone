import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import "./Card.css";

import {Card__comments, Card__comment, Card__commentUser, Card__lastComment, Card__commentClose} from ".//CardStyle"

const Comments = ({ timestamp, comments, onDeleteComment}) => {
	return (
		<Card__comments>
			{comments.map(( comment,i ) => (
				<Card__comment key={i}>
					<p>
						<Card__commentUser> { comment.username } </Card__commentUser>
						{ comment.text }
					</p>
					<Card__commentClose onClick={() => onDeleteComment(comment)}>&times;</Card__commentClose>
				</Card__comment>
			))}
			<Card__lastComment>
				{moment(timestamp, "MMM Do YYYY h:mm:ss").fromNow()}
			</Card__lastComment>
		</Card__comments>
	);
};

Comments.propTypes = {
	timestamp: PropTypes.string.isRequired,
	onDeleteComment: PropTypes.func.isRequired,
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		})
	)
};

export default Comments;
