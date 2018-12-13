import React, { Component } from 'react';
import './CommentSection.css';

const CommentSection = props => {
  return (
    <div className="comments-con">
      <div className="comments-icons"></div>
      <div className="comments-likes">{d.likes} likes</div>
      <div className="comments-con">{d.comments.map(comment => (
        <div className="comments-comment">
          <div className="comments-username">{comment.username}</div>
          <div className="comments-text">{comment.text}</div>
        </div>
      ))}
      </div>
    </div>
    
  )

}



