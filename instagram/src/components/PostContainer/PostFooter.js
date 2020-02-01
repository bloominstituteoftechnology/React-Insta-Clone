import React from 'react';
import CommentSection from './CommentSection';
import Moment from 'react-moment';

function handler(onClick) {
	return () => onClick();
}

//couldnt get moment to work
function modifyTimestamp(timestamp){
	//"July 17th 2017, 12:42:40 pm",
	//let now = Moment().format();
	let now = new Date();
	timestamp = timestamp.replace(/th/g, "");
	timestamp = timestamp.replace(/st/g, "");
	//let modifiedTimestamp = new Moment(timestamp).format();
	let modifiedTimestamp =  new Date(timestamp);
	return modifiedTimestamp;
}

function PostFooter(props) {
  return (
    <div className="post-footer">
    	<div className="footer-icons-container">
	    	<button className="footer-icon" onClick={handler(props.onClick)}>{'\uf004'}</button>
	    	<button className="footer-icon">{'\uf075'}</button>
	    </div>
    	<div className="footer-likes">{props.post.likes} likes</div>
    	<CommentSection comments={props.post.comments} modifiedTimestamp={modifyTimestamp(props.post.timestamp)} />
    </div>
  );
}

export default PostFooter;
