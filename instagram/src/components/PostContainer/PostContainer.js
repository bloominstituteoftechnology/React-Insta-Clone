import React from "react";
import CommentSection from "./../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div>
      <p>Hi</p>
      {props.userData.comments.map(user => {
        return (
          <CommentSection key={props.userData.id} comments={user.comments} />
        );
      })}
    </div>
  );
};

export default PostContainer;
