import React from 'react';
import PropTypes from 'prop-types';

function convertTimestampToText(modifiedTimestamp){
	//"July 17th 2017, 12:42:40 pm",
	let now = new Date();
	let timeDiff = now.getTime() - modifiedTimestamp.getTime();
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

function CommentFooter(props) {
  return (
  	<React.Fragment>
	    <div className="time-since-post">{convertTimestampToText(props.modifiedTimestamp)}</div>
	</React.Fragment>
  );
}

CommentFooter.propTypes = {
  modifiedTimestamp: PropTypes.date
};

export default CommentFooter;