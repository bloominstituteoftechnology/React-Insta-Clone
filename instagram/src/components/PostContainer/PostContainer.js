import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'

class PostContainer extends Component {

  render() {
    return (
      <div className="feed">{this.props.posts.map( (post, index) => {
        return (
          <div className="post" key={post.username + index}>
            <div>
              <img className="thumbnailPic" src={post.thumbnailUrl} alt="ThumbnailPic" />
              <h5>{post.username}</h5>
            </div>
              <img className="instagramPic" src={post.imageUrl} alt="InstagramPic" />
            <div>
              <i className="far fa-heart fa-lg"></i>
              <i className="far fa-comment"></i>
            </div>
            <div>{post.likes} likes</div>
            <CommentSection comments={post.comments} />
            <div>{post.timestamp}</div>
          </div>
        );
      })}
      </div>
    );
  }
}

export default PostContainer