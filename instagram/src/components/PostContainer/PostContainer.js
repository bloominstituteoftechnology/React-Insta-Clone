import React from "react";
import CommentsContainer from "../CommentSection/CommentSection";
import "./PostContainer.css";
import PropTypes from "prop-types";

const Container = props => {
  // console.log(props.post.comments);
  return (
    <div className="post-container">
      <div className="post-top-section">
        <img className="thumbnail" src={props.post.thumbnailUrl} alt="thumbnail" />
        <p className="username">{props.post.username}</p>
      </div>
      <div>
        <img className="post-img" src={props.post.imageUrl} alt="post" />
      </div>
      <div>
        <img className="heart-plus" src={require("./img/insta_heart.png")} alt="heart" />
        <img className="heart-plus" src={require("./img/insta_plus.png")} alt="plus" />
      </div>
      <p className="likes">{props.post.likes} likes</p>

      {props.post.comments.map((comment, index) => {
        return <CommentsContainer comments={comment} key={index} />;
      })}
    </div>
  );
};

Container.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default Container;
