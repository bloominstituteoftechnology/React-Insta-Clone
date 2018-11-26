import React from 'react';
import PostCommentsContainer from './PostCommentsContainer';
import CommentFooter from './CommentFooter';

function convertTimestampToText(timestamp){
	//"July 17th 2017, 12:42:40 pm",
	let now = new Date();
	timestamp = timestamp.replace(/th/g, "");
	timestamp = timestamp.replace(/st/g, "");
	let ago = new Date(timestamp);
	let timeDiff = now.getTime() - ago.getTime();
	let oneDay = 24*60*60*1000;
	let oneHour = 60*60*1000;
	let oneMinute = 60*1000;
	let oneSecond = 1000;
	let timeUnits = '';

	if(timeDiff < oneDay){
		timeDiff = Math.round(timeDiff/oneHour);
		timeUnits = 'hours';
		if(timeDiff < oneHour){
			timeDiff = Math.round(timeDiff/oneMinute);
			timeUnits = 'minutes';
		}else if (timeDiff < oneMinute){
			timeDiff = Math.round(timeDiff/oneSecond);
			timeUnits = 'seconds';
		}
	}else{
		timeDiff = Math.round(timeDiff/oneDay);
		timeUnits = 'days';
	}

	let convertedTimestamp = timeDiff + ' ' + timeUnits + ' ago';
	return convertedTimestamp.toUpperCase();
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
    	<CommentFooter convertedTimestamp={convertTimestampToText(props.post.timestamp)}/>
    </div>
  );
}

export default PostFooter;
