import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {

  render() {
    return (
      <div className="post-container">
        <div className="post">
          <p>
            <img className="post-thumb" src={this.props.post.thumbnailUrl} alt="user avatar" />
            {this.props.post.username}
          </p>
          <img className="post-img" src={this.props.post.imageUrl} alt="post topic" />
          <div className='like-symbol'>
            <span className="far fa-heart"></span>
            <span className="far fa-comment fa-flip-horizontal"></span>
          </div>
          <div className='like-count'>
            {this.props.post.likes} likes
          </div>
        </div>
        <CommentSection comments={this.props.post.comments}
          ts={this.props.post.timestamp} />
      </div>
    );
  }
}


PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};


export default PostContainer;
