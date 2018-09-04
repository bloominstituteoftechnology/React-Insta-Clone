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

// Post.propTypes = {
//   comments: PropTypes.shape({
//     text: PropTypes.number.isRequired,
//     username: PropTypes.string.isRequired,
//   }).isRequired
// }


export default Post
