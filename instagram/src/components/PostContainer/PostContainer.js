import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import './PostContainer.css'

const PostContainer = props => (
  <div className="post">
  <div className="post__header">
    <div className="post__header__image">
    <img src={props.post.thumbnailUrl} />
    </div>
    <h1> {props.post.username} </h1>
  </div>
  <img src={props.post.imageUrl} />
  <div className="post__buttons">
  </div>
  <h1> {props.post.likes} likes </h1>
  {props.post.comments.map(comment => <CommentSection comment={comment} />)}
  <p> {props.post.timestamp} </p>
  </div>
)

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array
  })
}
export default PostContainer;