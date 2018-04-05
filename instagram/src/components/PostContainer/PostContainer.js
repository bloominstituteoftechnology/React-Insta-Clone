import React, { Component } from 'react';
import { CommentSection } from '../CommentSection/CommentSection.js';

// receives each individual post object from <App/>
export class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsArray: [props.userPost.comments] // returns the array of comments for each post
    };
  }

  render() {
    return (
      <div className="Container">
        <div className="Container__header">
          <img src={this.props.userPost.thumbnailUrl} alt="profileThumbnail" className="Container__header--profileImg"/>
          <div className="Container__header--displayName">{this.props.userPost.username}</div>
        </div>
        <img src={this.props.userPost.imageUrl} alt="postImage" className="Container__postedImg"/>
        <CommentSection comments={this.state.commentsArray} />
      </div>
    )
  }
}
