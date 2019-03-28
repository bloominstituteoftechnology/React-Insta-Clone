import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div>
      <p>{props.data.username}</p>
      <img src={props.data.thumbnailUrl} alt="alt text" />
      <p src={props.data.imageUrl}/>
      <p>{props.data.likes}</p>
      <p>{props.data.timestamp}</p>
      <CommentSection id={props.data.id} comments={props.data.comments} addComment={props.addComment} commentValue={props.commentValue} change={props.change}/>
    </div>
  );
};

export default PostContainer;
