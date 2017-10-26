import React, { Component } from 'react';
import postData from './application-data';
import { CommentSection } from './CommentSection';
import './PostContainer.css';
export default class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentPost: postData
    };
  }

  render() {
    return this.state.currentPost.map(post => {
      return (
        <div className="post">
          <div className="post_Header">
            <div className="post_Header_Thumb">
              <img className="img-circle" src={post.thumbnailUrl} alt="alt" />
            </div>
            <div className="post_Header_User">{post.username}</div>
          </div>
          <img className = "post_Img" src={post.imageUrl} alt="alt" />
          <div className = "icon_Bar">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <i class="fa fa-comment-o" aria-hidden="true"></i>
          </div>
          <div className = "like_Bar">{post.likes} likes</div>
          <div className = "bottom_Box">
          <div />
          <CommentSection comments={post.comments} />
        </div>
        <div className = "date_Bar">
          <div> {post.timestamp}</div>
        </div>
        </div>
        
      );
    });
  }
}