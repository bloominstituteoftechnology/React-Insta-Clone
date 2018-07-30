import React from "react";
import CommentSection from "../CommentComponents/CommentSection";
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.dataSet.map(newPost => {
        return (
          <div key={newPost.timestamp} className="post-card">
              <div className="card-header">
              <img className="user-thumbnail" src={newPost.thumbnailUrl} alt="thumbnail"/>
              <p><b>{newPost.username}</b></p>
              </div>

              <img className="user-post" src={newPost.imageUrl} alt="post" />

              <div className="card-info">
              <i className="far fa-heart"></i>
              <i className="far fa-comment"></i>
              <p><b>{newPost.likes} likes</b></p>
              <CommentSection
              comments={newPost.comments}
              timestamp={newPost.timestamp}
               />
               </div>
          </div>
        )
      })}
    </div>
  );
};

export default PostContainer;