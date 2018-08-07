import React from "react";
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
//uuid

const PostContainer = props => {

    console.log("in post container", props.posts)
  return (
    <div>
      {props.posts.map((each, i) => {
        return (
          <div key={i} className="post-container">
            <h3>{each.username}</h3>
            <img src={each.imageUrl} alt={`by ${each.username}`} />
            <div>likes {each.likes}</div>
            <CommentSection comments={each.comments} />
          </div>
        );
      })}
    </div>
  );
};

export default PostContainer;
