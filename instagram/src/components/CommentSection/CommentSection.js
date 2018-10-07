import React from "react";
import "./CommentSection.css";
import compass from "../../assets/compass.svg";
import heart from "../../assets/heart.svg";
import user from "../../assets/user.svg";

const CommentSection = props => {
  return (
    <div>
      <div className="icon-bar">
        <div className="icons">
          <div className="icon">
            <img src={compass} alt="compass" />
          </div>
          <div className="icon">
            <img src={heart} alt="heart" />
          </div>
          <div className="icon">
            <img src={user} alt="user" />
          </div>
        </div>
        <div className="icon">
            <img src={user} alt="user" />
          </div>
      </div>
      <div className='comment-text'>
      <h5>{props.post.likes} likes</h5>
      <div className='comments'>
        {props.post.comments.map((comment,i) =>
            <div className='comment' key={i}>
                <p><span className='commenter'>{comment.username}</span>{comment.text}</p>
            </div>)}
      </div>
            <div className='add-comment'>
            <input type='text' className='input-comment' placeholder='add comment'></input>
            <div className="icon">
            <img src={user} alt="user" />
          </div>
            </div>
      </div>
    </div>
  );
};

export default CommentSection;
