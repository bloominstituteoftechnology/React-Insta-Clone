import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => (
  <div>
    {props.data.username}
    <CommentSection />
  </div>
);

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array,
  }),
};

export default PostContainer;
