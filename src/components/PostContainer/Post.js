import React from 'react'
import PropTypes from 'prop-types'
import './Post.css'
import Comments from '../CommentSection/Comments'

const Post = (props) => {
  return (
    <React.Fragment>
      <p>post by {props.post.username}</p>
      <Comments className="Comments" comments={props.post.comments} />
    </React.Fragment>
  )
}

Post.propTypes = {
  post: PropTypes.object,
  imageUrl: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  timestamp: PropTypes.string,
  username: PropTypes.string,
  likes: PropTypes.number,
}

export default Post
