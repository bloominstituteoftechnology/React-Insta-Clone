import React from "react";
import PostHeader from "./PostHeader";
import "./Post.css";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.postList.map((eachPost, i) => {
        return (
          <div key={i} className="post-border">
            <PostHeader
              username={eachPost.username}
              thumbnailUrl={eachPost.thumbnailUrl}
            />
            <div className="post-image-wrapper">
              <img
                alt="post thumbnail"
                className="post-image"
                src={eachPost.imageUrl}
              />
            </div>
            <CommentSection
              comments={eachPost.comments}
              timestamp={eachPost.timestamp}
              updateCommentField={props.updateCommentField}
              submitNewComment={props.submitNewComment}
              commentField={props.commentField}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostContainer;
