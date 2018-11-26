import React from 'react';
import PostCommentsContainer from './PostCommentsContainer';
import CommentFooter from './CommentFooter';
import Moment from 'react-moment';

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
	    	<div className="footer-icon">{'\uf004'}</div>
	    	<div className="footer-icon">{'\uf075'}</div>
	    </div>
    	<div className="footer-likes">{props.post.likes} likes</div>
    	<PostCommentsContainer comments={props.post.comments}/>
    	<CommentFooter modifiedTimestamp={modifyTimestamp(props.post.timestamp)}/>
    </div>
  );
}

export default PostFooter;
