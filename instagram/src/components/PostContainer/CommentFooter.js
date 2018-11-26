import React from 'react';

function CommentFooter(props) {
  return (
  	<React.Fragment>
	    <div className="time-since-post">{props.convertedTimestamp}</div>
	    <div className="add-comment-more-options-container">
		    <input className="comment-input-box" type="text" placeholder='Add a comment...'></input>
		    <div className="more-options-icon">{'\uf142'}</div>
		</div>
	</React.Fragment>
  );
}

export default CommentFooter;