import React from 'react';
import './Postcontainer.css';

import CommentSection from './CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <div className="PostContainer">
      <div className="container post">
        <div className="post-header">
          <div className="thumbnail">
            <img src={props.thumbnail} alt="thumbnail" />
          </div>
          <h6>{props.username}</h6>
        </div>
        <div className="post-image">
          <img src={props.img} alt="" />
        </div>
        <div className="ui-controls">{/* */}</div>
        <button className="likes">{props.likes} likes</button>
        <CommentSection comments={props.comments} />
        <div className="post-footer">
          <form className="add-a-comment">
            <input
              type="text"
              placeholder="Add a comment..."
              value={props.newComment}
              name="addComment"
              onChange={props.onChange}
            />
          </form>
          <button className="more">more</button>
        </div>
      </div>
    </div>
  );
};

PostContainer.prototype = {
  thumbnail: PropTypes.string,
  username: PropTypes.string,
  img: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.string,
  newComment: PropTypes.string,
  onChange: PropTypes.func
};

export default PostContainer;
