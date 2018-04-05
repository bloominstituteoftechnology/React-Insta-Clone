import React from 'react';
import moment from 'moment';

const CommentSection = props => {
  console.log(props.time);
  return (
    <div className="comments-container">
      {props.comments.map((c, i) => (
        <div key={'comment' + i}><span className="username">{c.username}</span>: {c.text}</div>
      ))}
      <div className="comment-time"><p>{moment(props.time, 'MMMM-Do-YYYY, hh:mm:ss-a').fromNow().toUpperCase()}</p></div>
      <div className="input-container">
        <input className="comment-input" type='text' placeholder='Add a comment...' onChange={props.change} value={props.value} />
        <div onClick={props.submit}><img src="img/elipsis.png" alt="Add comment"/></div>
      </div>
    </div>
  );
}

export default CommentSection;
