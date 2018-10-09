import React from "react";
import "./CommentSection.css";
import { Heart, Bookmark, Message, Share, More } from "../../assets/assets";
import PropTypes from "prop-types";
import moment from 'moment';

const CommentSection = props => {
  return (
    <div>
      <div className="icon-bar">
        <div className="icons">
          <Heart />

          <Message />

          <Share />
        </div>

        <Bookmark />
      </div>
      <div className="comment-text">
        <h5>{props.post.likes} likes</h5>
        <div className="comments">
          {props.post.comments.map((comment, i) => (
            <div className="comment" key={i}>
              <p>
                <span className="commenter">{comment.username}</span>
                {comment.text}
              </p>
            </div>
          ))}
          <div className="timestamp">{moment( props.post.timestamp,'MMMM Do YYYY, h:mm:ss a').fromNow()}</div>
        </div>
      </div>
      <div className="add-comment">
        <input
          type="text"
          className="input-comment"
          placeholder="Add a comment..."
        />

        <More />
      </div>
    </div>
  );
};

CommentSection.propTypes = {
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

export default CommentSection;
