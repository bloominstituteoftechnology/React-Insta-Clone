import React from "react";
import CommentSection from "./../../components/CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div>
      {/* POST CONTAINER */}
      {props.post.comments.map(comment => {
        return (
          <CommentSection
            text={comment.text}
            username={comment.username}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
};

export default PostContainer;
