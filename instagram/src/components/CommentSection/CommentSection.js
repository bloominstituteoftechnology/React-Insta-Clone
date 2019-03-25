import React from "react";
import Comment from "./Comment";
import "./CommentSection.css";

const CommentSection = props => {
	return props.comments.map(comment => (
		<Comment comment={comment} key={comment.id} />
	));
};

export default CommentSection;
