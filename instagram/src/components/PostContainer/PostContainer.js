import React from "react";
import PostHeader from "./PostHeader";
import PostPicture from "./PostPicture";
import PostIcons from "./PostIcons";
import CommentContainer from "../CommentSection/CommentContainer";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container-wrapper">
      <PostHeader data={props.data} />
      <PostPicture data={props.data} />
      <PostIcons
        data={props.data}
        addLike={props.addLike}
        username={props.username}
        handleClick={props.handleClick}
      />
      <div className="comment-container">
        <CommentContainer
          comments={props.comments}
          data={props.data}
          addComment={props.addComment}
          inputText={props.inputText}
          handleChange={props.handleChange}
          username={props.username}
        />
      </div>
    </div>
  );
};

export default PostContainer;
