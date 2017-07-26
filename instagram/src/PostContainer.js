import React, { Component } from 'react';
import CommentSection from './CommentSection';

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="outter-container">
        <div className="top-post">
          <img src={this.props.postData.thumbnailUrl}/>
          <strong>{this.props.postData.username}</strong>
        </div>
        <div className="mid-post">
          <p>{this.props.postData.timestamp}</p>
          <img src={this.props.postData.imageUrl} />
        </div>
        <CommentSection postData={this.props.postData} />
      </div>
    );
  }
}

export default PostContainer;
