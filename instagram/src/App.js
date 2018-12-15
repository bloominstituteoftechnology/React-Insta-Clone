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

  changeSearchText = event => {
    this.setState({ searchText: event.target.value })
  }

  addLike = id => {
    let data = this.state.instaData;
    data.map(item => {
      if(item.timestamp === id) {
        item.likes++;
        return item;
      } else {
        return item;
      }
    })

    this.setState({ instaData: data });
  }

  render() {
    return (
      <div className="App">
        <SearchBar changeText={this.changeSearchText} />
        {this.state.instaData.map(user => <PostContainer data={user} key={user.timestamp} like={this.addLike} />)}
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
