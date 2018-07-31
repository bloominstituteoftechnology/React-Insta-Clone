import React from 'react';
// import PropTypes from 'prop-types';
import './CommentSection.css';
import Comments from '../CommentSection/Comments';

const CommentSection = (props) => {
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
      <h5>{Date.now()}</h5> // add real date here

    </div>
  )
}


export default CommentSection;