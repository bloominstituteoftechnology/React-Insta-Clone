import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {

  render() {
    return (
      <div className="post-container">
        <div className="post">
          <p>
            <img className="post-thumb" src={this.props.post.thumbnailUrl} alt="thumbnail" />
            {this.props.post.username}
          </p>
          <img className="post-img" src={this.props.post.imageUrl} alt="image" />
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

export default PostContainer;
