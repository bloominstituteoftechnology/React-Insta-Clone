import React from "react";
import "./PostContainer.css";
import CommentSection from "./CommentSection/CommentSection";
import PropTypes from "prop-types";

function PostContainer(props) {
  return (
    <div className="col-xs-12 col-md-8">
      <div class="card mb-3">
        <div class="card-header">
          <img
            src={props.post.thumbnailUrl}
            alt={props.post.username + " thumbnail"}
          />
          <h3>{props.post.username}</h3>
        </div>
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            <CommentSection comments={props.post.comments} />
            <input type="text" className="new-comment" />
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  })
};

export default PostContainer;
