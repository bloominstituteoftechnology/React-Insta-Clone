import React from 'react';
import './Comments.css'
const Comment = props => {
	return(
		<div>
			{props.comment.map(comments => (
				<div>
					<span className="commentUser">
					{<strong>{comments.username}</strong>}
					</span>
				  <span className="commentText">{comments.text}</span>
				</div>
			))}
		</div>
	);
	
};

export default Comment;