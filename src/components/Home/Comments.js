import React from "react";
import { PropTypes } from "prop-types";

const Comments = props => {
  return (
    <div className="comments">
      <div className="icons">
        <i
          onClick={() => props.onLikeClick(props.id)}
          className="far fa-heart"
        />
        <i className="far fa-comment" onClick={() => props.onGettingData()} />
        <i className="fas fa-share" />
      </div>
      <h1>{props.likes} Likes</h1>

      {props.comments.map((comment, i) => (
        <div key={i} className="comments-section">
          <h1>{comment.username}</h1>
          <span>{comment.comment}</span>
        </div>
      ))}

      <div className="comment-input">
        <form
          onSubmit={e => {
            props.onComment(
              e,
              props.id,
              window.localStorage.username,
              props.commentField
            );
          }}
        >
          <input
            className="comment-input-field"
            onChange={props.handleChange}
            name="commentField"
            placeholder="Comment..."
            value={props.commentField}
          />
        </form>
      </div>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ),
  onLikeClick: PropTypes.func,
  postId: PropTypes.number
};

export default Comments;
