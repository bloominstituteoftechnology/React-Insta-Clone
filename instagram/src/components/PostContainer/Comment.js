import React from 'react';

function Comment(props) {
	//not sure why it's so hard to get a space between username and text. 
	//tried <strong>, appending string, and placing a space. nothing worked. 
	//will use margin for now but that seems bad
	return (
		<div className="comment">
	  		<div className="comment-source">{props.comment.username}</div>
			<div className="comment-text">{props.comment.text}</div>
		</div>
  	);
}

export default Comment;