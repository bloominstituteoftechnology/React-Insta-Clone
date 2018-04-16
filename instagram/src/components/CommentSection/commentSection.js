import React from 'react';

const CommentSection = props => {
  return (
    <div className="commentSection">
      <div className="post_commentsContainer">
        <div className="comment_options">
          <img className="icon comment_icon" src={require("../../Images/heart.png")} alt="Heart icon"/>
          <img className="icon comment_icon" src={require("../../Images/comment-bubble.png")} alt="Comment icon"/>
        </div>
        <div className="post_likes">{props.post.likes}</div>

        {props.post.comments.map((comment, index) => (
          <div className="post_comment" key={`${comment.username} ${index}`}>
            <div className="comment_userName">{comment.username}</div>
            <div className="comment_text">{comment.text}</div>
          </div>
        ))}

        <div className="timeStamp">{props.post.timestamp}</div>
        <div className="comment_inputField">
          <input className="comment_input" placeholder="Add a comment..." />
          <img className="icon comment_icon" src={require("../../Images/three-dots.png")} alt="Three dots icon"/>
        </div>
      </div> 
    </div>
  )
}

export default CommentSection;