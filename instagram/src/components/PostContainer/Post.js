import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection'

const Post = props => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-header-img" src={props.data.thumbnailUrl} />
        <h3 className="post-header-username">{props.data.username}</h3>
      </div>
      <img className="post-img" src={props.data.imageUrl} />
      <CommentSection
        comments={props.data.comments}
        likes={props.data.likes}
        time={props.data.timestamp}/>
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
