import React, { Component } from 'react';
import CommentSection from '../CommentSection/comment-section.js';
import './post-container.css';

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='post-container'>
        <div>
          <img className='post-container__thumbnail' src={this.props.user.thumbnailUrl} alt='' />
          <p className='post-container__head-name'>{this.props.user.username}</p>
        </div>
        <div>
          <img className='post-container__image' src={this.props.user.imageUrl} alt ='' />
        </div>
        <p>{this.props.user.likes} likes <span className='post-container--bold'> Posted: </span>{this.props.user.timestamp}</p>
        <CommentSection comments={this.props.user.comments} />
      </div>
    );
  }
}

export default PostContainer;