import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import postData from './application-data';

class App extends Component {
  constructor() {
    super();
      this.state = {
        search: 'Search',
        postData
      };
      this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    console.log('loaded and ready to go');
  }

  handleSearch(event) {
    let newSearch = this.state.search;
    newSearch = event.target.value;
    this.setState({search: newSearch});
  }

  render() {
    return (
      <div className="App">
       <SearchBar search={this.state.search} handleSearch={this.handleSearch} />
       <PostContainer posts={this.state.postData}/>
      </div>
    );
  }
}

export default App;
