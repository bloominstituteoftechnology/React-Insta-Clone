import React from 'react';
// import PropTypes from 'prop-types';
import './CommentSection.css';
// import CommentSection from '../CommentSection/CommentSection';

const CommentSection = (props) => {
  return (
    <div className="commentDiv">
      <div className="userNameDiv">
        <img src={props.comment.thumbnailUrl} />
        <h2>{props.comment.username}</h2>
      </div>

      <img src={props.comment.imageUrl} className="commentImg"/>
      
      <div className="faPostDiv">
        <i class="fa fa-heart-o"></i>
        <i class="fa fa-comment-o fa-flip-horizontal"></i>
      </div>
    </div>
  )
}


export default CommentSection;