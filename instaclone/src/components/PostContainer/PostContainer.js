import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
  return (
    <div className="post">
      <div className="postTitle">
        <img src={props.data.thumbnailUrl} alt=""/>
        <p>{props.data.username}</p>
      </div>
      <img className="postImage" src={props.data.imageUrl} alt=""/>
      <div className="postIcons">
        <i className="far fa-heart"></i>
        <i className="far fa-comment"></i>
      </div>
      <p className="likes">{props.data.likes} likes</p>
      <CommentSection comments={props.data.comments} comment={props.comment} />
    </div>
  )
}

PostContainer.propTypes = {
  data: PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
}

export default PostContainer;