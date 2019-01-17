import React from 'react';
import dummyData from '../dummy-data';
const Comment = (props) => {
	return (
		<div>
			{dummyData.comments.map((item) => (
				<div key={item.username}>
					{item.text} {item.username}
				</div>
			))}
		</div>
	);
};
const CommentSection = (props) => {
	return (
		<div>
			<Comment />
			<input value={props.text} onChange={props.commentInput} />
		</div>
	);
};
export default CommentSection;
