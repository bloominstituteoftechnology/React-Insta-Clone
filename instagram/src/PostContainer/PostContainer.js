import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";
//uuid

const PostContainer = props => {
  console.log("in post container", props.posts);
  return (
    <div className="insta-post-container">
      {props.posts.map((each, i) => {
        return (
          <div key={i} className="post-container">
            <div className="post-header-container">
              <h3>{each.username}</h3>
              <img
                className="post-logo"
                src={each.thumbnailUrl}
                alt={`by ${each.username}`}
              />
            </div>

            <img
              className="image-posts"
              src={each.imageUrl}
              alt={`by ${each.username}`}
            />
            <div className="comment-container">
              <div>likes {each.likes}</div>
              <CommentSection comments={each.comments} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostContainer;
