import React from 'react';
import moment from '../../../node_modules/moment/moment';
import CommentSection from '../CommentSection/CommentSection';
import styles from './PostContainer.css'

const PostContainer = (props) => {
  
  const formatTimestamp = (timestamp) => {
    const now = moment();
    const then = moment(timestamp, 'MMMM Do YYYY, h:mm:ss a');
    if (now.diff(then, 'seconds') < 1) {
      return 'Less than a second ago';
    }
    if (now.diff(then, 'minutes') < 1) {
      const diff = now.diff(then, 'seconds');
      return diff === 1 ? '1 second ago ' : `${diff} seconds ago`;
    }
    if (now.diff(then, 'hours') < 1) {
      const diff = now.diff(then, 'minutes');
      return diff === 1 ? '1 minute ago ' : `${diff} minutes ago`;
    }
    if (now.diff(then, 'days') < 1) {
      const diff = now.diff(then, 'hours');
      return diff === 1 ? '1 hour ago ' : `${diff} hours ago`;
    }
    if (now.diff(then, 'weeks') < 1) {
      const diff = now.diff(then, 'days');
      return diff === 1 ? '1 day ago ' : `${diff} days ago`;
    }
    if (now.diff(then, 'months') < 1) {
      const diff = now.diff(then, 'weeks');
      return diff === 1 ? '1 week ago ' : `${diff} weeks ago`;
    }
    if (now.diff(then, 'years') < 1) {
      const diff = now.diff(then, 'months');
      return diff === 1 ? '1 month ago ' : `${diff} months ago`;
    }
    const diff = now.diff(then, 'years');
    return diff === 1 ? '1 year ago ' : `${diff} years ago`;
  };
  
  return (
    <div className="wrapper">
      <div className="post">
        <div className="top">
          <img src={props.thumbnailUrl} className="thumbnail" alt="thumbnail image" />
          <div className="username">{props.username}</div>
        </div>
        <img src={props.imageUrl} className="image" alt="featured image" />
        <div className="likes-container">    
          <div className="likes">{props.likes} {props.likes === 1 ? 'like' : 'likes'}</div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Heart_empty_font_awesome.svg/240px-Heart_empty_font_awesome.svg.png" alt="heart icon" className="heart-icon" onClick={props.onClick} />
        </div>
        <CommentSection className="comments" comments={props.comments} />
        <div className="timestamp">{formatTimestamp(props.timestamp)}</div>
      </div>
    </div>
  );
};

export default PostContainer;