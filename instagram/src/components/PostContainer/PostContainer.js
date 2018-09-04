import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

class PostContainer extends Component {
  render() {
    const {comments, imageUrl, likes, thumbnailUrl, timestamp, username} = this.props.postData;
    return (
      <div className="post-container">
        <div className="thumbnail-container">
          <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
          <h4 className="username">{username}</h4>
        </div>
        <img className="main-img" src={imageUrl} alt="User Post"/>
        <div className="comment-section">
          <div className="icons">
            <FontAwesomeIcon className="heart-icon" icon={faHeart} size="2x" />
            <FontAwesomeIcon className="comment-icon" icon={faComment} size="2x" />
          </div>
          <p className="likes">{likes} Likes</p>
          <CommentSection comments={comments} />
          <p className="timestamp">{timestamp}</p>
        </div>
      </div>
    )
  }
}

export default PostContainer;