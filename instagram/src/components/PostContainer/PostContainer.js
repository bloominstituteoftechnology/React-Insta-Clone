import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import moment from "moment";
import "./PostContainer.css";
import Likes from "./Likes";
import Post from './Post';

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.posts.map(post => <Post key={post.imageUrl} post={post} />)}
    </div>
      )
}

export default PostContainer;
