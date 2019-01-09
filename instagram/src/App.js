import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostPage from './components/PostContainer/PostPage';
// import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: [],
      searchText: ""
    };
  }

  changeSearchText = event => {
    this.setState({ searchText: event.target.value })
  }

  setStorage = () => {
    localStorage.setItem('data', JSON.stringify(this.state.instaData));
  }

  searchQuery = event => {
    event.preventDefault();
    this.setStorage();
    let data = this.state.instaData.filter(item => item.username.includes(this.state.searchText.toLowerCase()));
    this.setState({ 
      instaData: data,
      searchText: ""
     })
  }

  clearSearch = () => {
    this.setState({ instaData: JSON.parse(localStorage.getItem('data'))});  
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

  componentDidMount() {
    this.setState({ instaData: dummyData });
    localStorage.setItem('data', JSON.stringify(dummyData))
  }

  render() {
    return (
      <div className="App">
        <SearchBar changeText={this.changeSearchText} search={this.searchQuery} clearSearch={this.clearSearch} value={this.state.searchText} />
        <PostPage state={this.state} addLike={this.addLike} />
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
