import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import CommentInput from "../CommentSection/CommentInput";

const Post = props => {
  return (
    <div className="App-intro">
      <p>
        <img src={props.thumb} className="thumbnail" />
        <span id="thumb-user">{props.user}</span>
      </p>
      <img src={props.pic} className="image" />
      <div className="buttons">
        <img src={require('../../img/ig_like.png')} alt="like button"/>
        <span><img src={require('../../img/ig_comment.png')} alt="comment button"/></span>
      </div>
      <p>{props.like} likes</p>
      <CommentSection comment={props.comment} />
      <p>{props.time}</p>
      <CommentInput />
    </div>
  );
};

export default Post;
