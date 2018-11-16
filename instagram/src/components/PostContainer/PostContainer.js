import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import * as Icon from "react-feather";
const PostContainer = props => {
  console.log(props);
  return (
    <article className="article">
      <div className="user__wrapper">
        <img
          className="user__thumbnail"
          src={props.post.thumbnailUrl}
          alt={"icon of " + props.post.username}
        />
        <h1 className="user__name">{props.post.username}</h1>
      </div>
      <img className="post__image" src={props.post.imageUrl} alt="coffee" />
      <Icon.Heart
        style={props.completedProp ? { color: "red" } : { color: "black" }}
        onClick={() => props.handleLikesProp(props.post.timestamp)}
      />
      <Icon.MessageCircle />
      <p>{props.post.likes}</p>
      <CommentSection
        className="post__comments"
        comments={props.post.comments}
      />
    </article>
  );
};
PostContainer.propTypes = {
  post: PropTypes.object
};
export default PostContainer;
