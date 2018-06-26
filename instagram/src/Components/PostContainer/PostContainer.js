import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
  render() {
    return (
      <div className="Post">
        {this.props.dummyData.map(post => {
          return (
            <div key={post.timestamp + post.username}>
              <p className="userInfo">
                <img className= "thumbnail" src={post.thumbnailUrl} alt="" /> {post.username}
              </p>
              <img className= "post-image"src={post.imageUrl} alt="" />
              <p>{post.likes}</p>
              <p>{post.timestamp}</p>
              <CommentSection comments={post.comments} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PostContainer;