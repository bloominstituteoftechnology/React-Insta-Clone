import React, { Component } from 'react';
import './App.css';
import postData from './dummy-data';

import SearchBar from './components/SearchBar/SearchBar.js';
import Post from './components/PostContainer/post.js'


class App extends Component {
  constructor(props) {
    super();

    this.state = {
      allPosts: [],
      displayedPosts: []
    }

    this.filterPosts = this.filterPosts.bind(this);
  }

  componentDidMount() {
    this.setState({
      allPosts: postData,
      displayedPosts: postData
    });
  }

  filterPosts(criterion) {
    if (criterion === '') {
      this.setState({
        displayedPosts: this.state.allPosts
      });
    } else {
      const filteredPosts = this.state.allPosts.filter(post => post.username.includes(criterion));
      this.setState({
        displayedPosts: filteredPosts
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Clonagram</h1>
          <SearchBar posts={this.state.displayedPosts} filterPOsts={this.filterPosts}/>
        </header>
        <div className="Posts">
          {this.state.displayedPosts.map((post, index) => {
            return (
              <Post key={index} post={post}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
