import React from 'react';
import Comment from "./Comment";
import "../../App.css";

const CommentSection = props => {
 	return (
		 <div className="userCommentContainer"> {props.comments.map((comment, index) => {
			return <Comment user={comment.username} comments={comment.text} key={index} />;
		  })} </div>

	); 
};
export default CommentSection;
