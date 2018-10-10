import React, { Component } from 'react';
import dummyData from '../../dummy-data.js';

import PostContainer from './PostContainer';

export class PostsPage extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  changeHandler = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  addLike = (timestamp) => {
    this.setState({
      posts: this.state.posts.map((post) => {
        if (post.timestamp === timestamp) {
          post.likes += 1;
        }
        return post;
      }),
    });
  };
  render() {
    return (
      <div>
        {dummyData.map((post) => {
          return (
            <PostContainer
              post={post}
              addLike={this.addLike}
              key={post.timestamp}
            />
          );
        })}
      </div>
    );
  }
}

export default PostsPage;
