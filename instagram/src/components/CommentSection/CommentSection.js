import React from 'react';
// import PropTypes from 'prop-types';
import './CommentSection.css';
import Comments from '../CommentSection/Comments';

const CommentSection = (props) => {
  let postDate = props.comment.timestamp.split(",")[0];
  postDate = postDate.replace("th", "").split(" ")
  postDate = postDate[1] + " " + postDate[0] + " " + postDate[2]
  postDate = new Date(postDate).getTime();
  let dateNow = Date.now();
  let timeSince = Math.ceil((dateNow - postDate) / (1000 * 3600 * 24))
  console.log(timeSince)
  return (
    <div className="commentDiv">
      <div className="userNameDiv">
        <img src={props.comment.thumbnailUrl} />
        <h2>{props.comment.username}</h2>
      </div>

      <img src={props.comment.imageUrl} className="commentImg"/>
      
      <div className="faPostDiv">
        <i className="fa fa-heart-o"></i> 
        <i className="fa fa-comment-o fa-flip-horizontal"></i>
      </div>
      <h4>{props.comment.likes} likes</h4>
      <div className="listOfCommentsDiv">
        {props.comment.comments.map(comment => <Comments comment={comment} />)} 
      </div>
      <h4 className="timeStamp">{timeSince} DAYS AGO</h4>

    </div>
  )
}


export default CommentSection;