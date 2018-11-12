import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import heartImage from '../../Images/Post/post-heart.png';
import commentImage from '../../Images/Post/post-comment.png';
import moment from 'moment';
import './Style.css';

const PostContainer = props => {
    return (
    <div className="post-container">
      <form className="post-form" onSubmit={props.addComment()}>
        <div className="post-header">
          <img className ="username-img-thumbnail" src={props.postContainer.thumbnailUrl} alt="" />
          <h2>{props.postContainer.username} <span className="timestamp">{moment(props.postContainer.timestamp, 'MMMM Do YYYY hh:mm:ss A').fromNow()}</span></h2>
        </div>
        <img className ="post-img" src={props.postContainer.imageUrl} alt="" />
        <div className="post-click-icons">
          <img className="post-icons" src={heartImage} alt="" />
          <img className="post-icons" src={commentImage} alt="" />
        </div>
        <h4 className="post-likes">{props.postContainer.likes} likes</h4>
        {props.postContainer.comments.map(comment => (
          <CommentSection key={comment.timestamp} comment={comment} />
        ))}
        <textarea className="post-add-comment-textbox" rows="4" name="comment" placeholder="Add a comment..." form="usrform" />
        <input className="post-add-comment-btn" type="submit" value="Post Comment" />
      </form>
    </div>);
}

PostContainer.propTypes = {
  postContainer: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
}

export default PostContainer