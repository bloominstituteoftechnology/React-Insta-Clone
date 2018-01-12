import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';

import postData from './application-data.js';

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
          <h1 className="App-title">imgram</h1>
          <SearchBar posts={this.state.displayedPosts} filterPosts={this.filterPosts}/>
        </header>
        <div className="Posts">
          {this.state.displayedPosts.map((post, index) => {
            return (
              <PostContainer key={index} post={post}/>        
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;