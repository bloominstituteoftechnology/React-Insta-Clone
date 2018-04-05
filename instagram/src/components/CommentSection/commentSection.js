import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Input } from 'reactstrap';

const CommentSection = props => {
  return (
    <div className="commentSection">
      <div className="post_commentsContainer">
        <div className="comment_options">
          <img className="icon comment_icon" src={require("../../Images/heart.png")}/>
          <img className="icon comment_icon" src={require("../../Images/comment-bubble.png")}/>
        </div>
        <div className="post_likes">373 Likes</div>
        <div className="post_comment">
          <div className="comment_userName">philzcoffe</div>
          <div className="comment_text">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </div>
        <div className="post_comment">
          <div className="comment_userName">philzcoffe</div>
          <div className="comment_text">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </div>
        <div className="timeStamp">2 HOURS AGO</div>
      </div>
      <div className="comment_inputField">
        <input className="comment_input" placeholder="Add a comment..." />
        <img className="icon comment_icon" src={require("../../Images/three-dots.png")}/>
      </div>
    </div>
  )
}

export default CommentSection;