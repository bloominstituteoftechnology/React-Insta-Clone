import React from "react";
import PostHeader from "./PostHeader";
import CommentContainer from "../CommentSection/CommentContainer";

const Post = props => {
  return (
    <div className="post">
      <div className="container">
        <div>
          <PostHeader
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
          />

          <div className="post__content--img">
            <img src={props.post.imageUrl} alt="look at this" />
          </div>

        </div>

        <CommentContainer comments={props.post.comments} />

      </div>
    </div>
  );
};

export default Post;
