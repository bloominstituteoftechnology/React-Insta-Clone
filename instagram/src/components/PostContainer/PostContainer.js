import React from "react";

const PostContainer = props => {
  return (
    <div>
      {props.dummy.map(post => (
        <div>{<CommentSection commentList={comments} />}</div>
      ))}
    </div>
  );
};

export default PostContainer;
