 import React from 'react';
 import Comment from '../CommentSection/Comment.js';
 import './CommentSection.css';
 import like from './img/like.png';
 import comments from './img/comments.png';


 const CommentSection = props => {
    return (
    <div className="commentSection">
      <div className="likeComments">
        <a href="#"><img src={like} alt="like" /></a>
        <a href="#"><img src={comments} alt="comments" /></a>
      </div>
      <div className="likes">
        <p>{props.likes} likes</p>
      </div>

    {props.comments.map(comment => {
      return <Comment 
      username={comment.username} 
      text={comment.text}
      />
  })}
  <div className="addComment">
        <input value="Add a comment..." />
        <div className="threeDots">...</div>
      </div>
    </div>
)}
 export default CommentSection;
