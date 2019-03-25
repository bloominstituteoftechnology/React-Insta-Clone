import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
	return props.comments.map(comment => (
		<Comment comment={comment} key={comment.id} />
	));
};

export default CommentSection;
