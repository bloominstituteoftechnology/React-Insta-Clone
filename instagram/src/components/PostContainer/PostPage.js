import React, { Component } from 'react';
import data from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      value: ''
    };
  }

  // Bring in data from API
  componentDidMount() {
    this.setState({ data: data });
  }

  // Filter users by full username
  filterUsers = e => {
    e.preventDefault();
    const filteredUsers = this.state.data.filter(
      user => user.username === this.state.value
    );
    this.setState({ data: filteredUsers });
  };

  // Updates Search Input Value
  updateValue = e => {
    this.setState({ value: e.target.value });
  };

  // Toggle Liking a Post
  likePost = (e, index) => {
    // If heart is empty
    if (e.target.classList.contains('far')) {
      e.target.classList.add('fas');
      e.target.classList.remove('far');

      const updateLike = this.state.data.map((post, i) => {
        if (index === i) {
          return {
            ...post,
            likes: post.likes + 1
          };
        } else {
          return post;
        }
      });

      this.setState({ data: updateLike });

      // else if heart is full
    } else if (e.target.classList.contains('fas')) {
      e.target.classList.remove('fas');
      e.target.classList.add('far');

      const updateLike = this.state.data.map((post, i) => {
        if (index === i) {
          return {
            ...post,
            likes: post.likes - 1
          };
        } else {
          return post;
        }
      });

      this.setState({ data: updateLike });
    }
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          filterUsers={this.filterUsers}
          updateValue={this.updateValue}
        />
        {this.state.data.map((d, i) => {
          return (
            <PostContainer
              data={d}
              key={i}
              index={i}
              id={d.timestamp}
              likePost={this.likePost}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default PostPage;
