import React from "react";
import CommentSection from "./../../components/CommentSection/CommentSection";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="card">
      {/* POST CONTAINER */}
      <img
        src={props.post.imageUrl}
        alt="card image"
        className="card-img-top"
      />
      <CommentSection post={props.post} />
    </div>
  );
};

export default PostContainer;
