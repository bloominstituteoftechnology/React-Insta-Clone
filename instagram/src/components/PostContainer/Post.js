import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection'

const Post = props => {
  return (
    <div>
    <CommentSection comments={props.data.comments} />
  </div>
  )
}

Post.propTypes = {
  entry: PropTypes.shape({
    comments: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  })
}





export default Post
