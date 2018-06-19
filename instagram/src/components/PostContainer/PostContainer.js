import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => (
  <div className="container posts">
    <div className="row">
      <div className="col-sm-4 name">
        <img
          src={props.data.thumbnailUrl}
          alt="user thumbnail"
          height="20px"
          width="20px"
        />{' '}
        {props.data.username}
      </div>
    </div>
    <div className="row">
      <div className="col-sm-1 postImg">
        <img src={props.data.imageUrl} alt="post" height="auto" width="598px" />
      </div>
    </div>
    <CommentSection post={props.data} addComment={props.addCommentHandler} />
  </div>
);

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
  }),
};

export default PostContainer;
