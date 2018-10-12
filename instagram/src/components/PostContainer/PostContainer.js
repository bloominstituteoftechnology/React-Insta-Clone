import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import DummyPost from "./DummyPost";
import PropTypes from "prop-types";
import {PostContDiv} from '../styleComponents'

const PostContainer = props => {
  if (!props.data.length) {
    return <DummyPost />;
  }
  return (
    <PostContDiv>
      {props.data.map(post => {
        let historyObj = {
          likes: post.likes,
          comments: post.comments,
          timestamp: post.timestamp
        };
        if (!localStorage.getItem(post.timestamp)) {
          localStorage.setItem(post.timestamp, JSON.stringify(historyObj));
        }
        return (
          <div key={post.timestamp} className="card">
            <div className="card-header">
              <img
                src={post.thumbnailUrl}
                className="thumbnail"
                alt={post.username}
              />
              <h3>{post.username}</h3>
            </div>
            <img src={post.imageUrl} alt="post" className="post-img" />
            <div className="card-comments">
              <CommentSection timestamp={post.timestamp} />
            </div>
          </div>
        );
      })}
    </PostContDiv>
  );
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ),
    likes: PropTypes.number.isRequired
  })
};

export default PostContainer;
