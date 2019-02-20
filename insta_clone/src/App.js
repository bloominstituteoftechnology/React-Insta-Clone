import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  static defaultProps = {
    post: []
  };

  state = {
    post: dummyData,
    foundPost: [],
    searchPost: ''
  };

  componentDidMount() {
    this.setState({
      post: dummyData
    });
  }

  searchHandler = e => {
    console.log(this.state.searchPost);

    this.setState({
      searchPost: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchPost={this.searchPost}
          searchHandler={this.searchHandler}
        />

        <PostContainer posts={this.state.post} />
      </div>
    );
  }
}

export default App;
