import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
      searchText: ""
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.instaData.map(user => <PostContainer data={user} key={user.timestamp} />)}
      </div>
    );
  }
}

App.propTypes = {
  instaData: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
}

export default App;
