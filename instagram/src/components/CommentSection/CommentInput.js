import React from 'react';
import './CommentSection.css';

const CommentInput = props => {
		
		return(
	        <form onSubmit={()=> props.addComment(props.UniqueData)}>
               		<input className="comment-bar"
                	type="text"
                	onChange={props.CommentValue}
                	placeholder="Add a comment"
                	value={props.NewCommentValue}
                	/>
                </form>
		);

};





export default CommentInput;
