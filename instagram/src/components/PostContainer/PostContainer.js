import React, { Component } from 'react';
import PostHeader from './PostHeader';
import PostBanner from './PostBanner';
import PostFooter from './PostFooter';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'

class PostContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.data.likes
      };
    }
  
    render() {
        return (
            <div className="post-container">
                <PostHeader thumbImg={this.props.data.thumbnailUrl} userN={this.props.data.username}/>
                <PostBanner bannerImg={this.props.data.imageUrl}/>
                <PostFooter likes={this.props.data.likes} />
                <CommentSection comments={this.props.data.comments}/>
            </div>
        );
    }
}

export default PostContainer;