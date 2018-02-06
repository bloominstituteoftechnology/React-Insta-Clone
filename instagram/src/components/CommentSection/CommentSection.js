import React from 'react';

function CommentSection(props) {
		console.log(props);
		return <div>{props.username}</div>;
}

export default CommentSection;