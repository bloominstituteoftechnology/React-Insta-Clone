import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

const PostContainer = props => (
  <div>
    <CommentSection comments={props.post.comments} />
  </div>
)

PostContainer.PropTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    timestramp: PropTypes.string.isRequired,
    comments: PropTypes.array
  })
}
export default PostContainer;