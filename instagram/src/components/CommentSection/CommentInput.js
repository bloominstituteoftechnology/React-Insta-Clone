import React from 'react';
import './CommentSection.css';

const CommentInput = props => {

		return(
	        <form onSubmit={props.addComment}>
               		
<input className="comment-bar" type="text" onChange={props.changeCommentValue} placeholder="Add a comment" value={props.newComment}/>
               
		</form>
		);
		};


export default CommentInput;
