import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

import './Posts.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state ={}

    }

    render() {
    return (
    <div className="post-border">
      <PostHeader
        username={this.props.post.username}
        thumbnailUrl={this.props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={this.props.post.imageUrl}
        />
      </div>
      <CommentSection comments={this.props.post.comments} 
                      postId={this.props.index} 
                      />
    </div>
    );
    }
}

export default Post;
