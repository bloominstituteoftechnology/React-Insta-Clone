import React, { Component } from 'react';
import SearchContainer from './SearchBar/searchcontainer';
import Search from './SearchBar/search';
import PostContainer from './PostContainer/postcontainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        App Container        
        <SearchContainer/>
        <PostContainer/>
      </div>
    );
  }
}

export default App;