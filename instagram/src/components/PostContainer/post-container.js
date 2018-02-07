import React, { Component } from 'react';
import CommentSection from '../CommentSection/comment-section.js';
import './post-container.css';

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Post</h1>
        <div>
          <img className='thumbnail' src={this.props.user.thumbnailUrl} alt='' />
          <p>{this.props.user.username}</p>
        </div>
        <div>
          <img className='image' src={this.props.user.imageUrl} alt ='' />
        </div>
        <p>{this.props.user.likes} likes</p>
        <CommentSection comments={this.props.user.comments} />
      </div>
    );
  }
}

export default PostContainer;