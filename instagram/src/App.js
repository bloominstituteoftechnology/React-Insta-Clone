import React, { Component } from 'react';
// import dummyData from './dummy-data.js';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {
  state = {
    searchQuery: '',
  };

  search = () => {};

  render() {
    return (
      <div className="App">
        <SearchBar
          search={this.search}
          changeHandler={this.changeHandler}
          text={this.state.searchQuery}
        />
        <PostsPage />
      </div>
    );
  }
}

export default App;
