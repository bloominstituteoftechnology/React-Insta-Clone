import React from "react";
import PostHeader from "./PostHeader";
import CommentContainer from "../CommentSection/CommentContainer";

const Post = props => {
  return (
    <div className="container">
      <div className="post">
        <div>
          <PostHeader
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
            likes={props.post.likes}
          />

          <div className="post__container">
            <div className="post__content--img">
              <img src={props.post.imageUrl} alt="look at this" />
            </div>
          </div>

          <CommentContainer
            comments={props.post.comments}
            likes={props.post.likes}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
