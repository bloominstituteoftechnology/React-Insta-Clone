import React from 'react';
import Comment from "./Comment";
import "../../App.css";
import PropTypes from 'prop-types';

const CommentSection = props => {
	return (
		<div className="userCommentContainer"> {props.comments.map((comment, index) => {
			return <Comment user={comment.username} comments={comment.text} key={index} />;
		})} </div>

	);
};

CommentSection.propTypes = {
	comment: PropTypes.arrayOf(
		PropTypes.shape({
			user: PropTypes.array,
			comments: PropTypes.array,
			key: PropTypes.number
		})
			.isRequired
	)
}
export default CommentSection;
