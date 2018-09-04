import React from 'react'
import PropTypes from 'prop-types'
import './Post.css'
import Comments from '../CommentSection/Comments'

const Post = (props) => {
  return (
    <React.Fragment>
      <div className="postUser">
        <img className="postUserIcon" src={props.post.thumbnailUrl} alt="User Thumbnail" />
        <span className="bold">{props.post.username}</span>
      </div>

      <div className="postPicture">
        <img src={props.post.imageUrl} alt="User Thumbnail" />
      </div>

      <div className="postIcons"> 
        <i className="far fa-heart"></i>
        <i className="far fa-comment"></i>
      </div>

      <div className="postLikes">
        <p className="bold">{props.post.likes} likes</p>
      </div>

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
