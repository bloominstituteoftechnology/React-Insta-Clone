import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import postData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allPosts: postData,
      filteredPosts: postData
    }
    this.filterPostsByUser = this.filterPostsByUser.bind(this);
  }

  filterPostsByUser(filterText) {
    if (filterText) {
      const postsToDisplay = [];
      this.state.allPosts.map(post => {
        if (post.username === filterText) postsToDisplay.push(post);
        // if (post.username.includes(filterText)) postsToDisplay.push(post);        
      })
      this.setState({ filteredPosts: postsToDisplay });
    } else {
      this.setState({ filteredPosts: this.state.allPosts});
    }
  }

  render() {
    return (
      <div>
        <SearchBar posts={this.state.filteredPosts} filterPostsByUser={this.filterPostsByUser} />
        {this.state.filteredPosts.map((post, index) => {
          return (
            <PostContainer postData={post} key={index} />
          )
        })}
      </div>
    );
  }
}

export default App;
