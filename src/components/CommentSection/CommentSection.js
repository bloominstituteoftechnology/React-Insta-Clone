import React, {Component} from 'react';


const CommentSection = (props) => {
	return(
		<div>
			<div className="Comment-Section">
				{props.content.map(comment => {
					return <p><strong>{comment.username}</strong>{comment.text}</p>
				})}
			</div>
		</div>
	)
}

export default CommentSection;
