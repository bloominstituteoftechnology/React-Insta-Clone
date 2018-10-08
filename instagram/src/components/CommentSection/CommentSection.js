import React from 'react';
import ellipsis from '../../Img/ellipsis-h-solid.svg';

const CommentSection = (props) => {
	return (
		<div className="addComment">
			<form action="submit">
				<input type="text" placeholder="Add a comment..." />
			</form>
			<img src={ellipsis} alt="add or report a comment" />
		</div>
	);
};

export default CommentSection;
