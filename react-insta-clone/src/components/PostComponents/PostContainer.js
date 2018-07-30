import React from "react";
import CommentSection from "../CommentComponents/CommentSection";

const PostContainer = props => {
  return (
    <div>
      {props.dataSet.map(newPost => {
        return (
          <div key={newPost.timestamp}>
              <img src={newPost.thumbnailUrl} alt="thumbnail"/>
              <p>{newPost.username}</p>
              <img src={newPost.imageUrl} alt="post" />
              <p>{newPost.likes} likes</p>

              <CommentSection 
              comments={newPost.comments} 
              />

              <p>{newPost.timestamp}</p>
          </div>
        )
      })}
    </div>
  );
};

export default PostContainer;