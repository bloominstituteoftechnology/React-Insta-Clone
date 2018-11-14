import React from "react";
import CommentSection from "../CommentSection/Comments";
import "./Post.css";

const PostContainer = props => {
  return (
    <div className="post-wrapper">
      <div className="post-header">
        <img className="thumb" src={props.data.thumbnailUrl} alt="logo" />
        <p className="user">{props.data.username}</p>
      </div>
      <div className="post-image">
        <img src={props.data.imageUrl} alt="post" />
      </div>
      <div className="like-heart">
        <img src="../../img/like-heart.png" alt="heart-icon" />
      </div>
      <div className="comment">
        <img src="../../img/comments.png" alt="comments" />
      </div>
      <div className="comments">
        {props.data.comments.map(comment => {
          return <CommentSection comm={comment} />;
        })}
      </div>
      <div className="add-comment">
        <form className="comm-add">
          <input type="text" name="addComment" placeholder="Add comment...." />
        </form>
      </div>
    </div>
  );
};

export default PostContainer;
