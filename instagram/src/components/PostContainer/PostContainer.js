import React, { Component } from 'react';
import './PostContainer.css';
import Post from './Post';

class PostContainer extends Component {
  render() {
    return (
      <div className='container'>
        <div className='content-container'>
          {this.props.dummyData.map(post => {
            return (
              <Post
                key={post.username}
                post={post}
                dummyData={this.props.dummyData}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostContainer;