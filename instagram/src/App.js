import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor () {
    super();
    this.state = {
      instaData: [],
    }
  }

  componentDidMount () {
    this.setState({instaData: dummyData});
  }
  render() {
    return (
      <div className="App">
        <SearchBar instagramData={this.state.instaData}/>
        <PostContainer comments={this.state.instaData} />
      </div>
    );
  }
}

export default App;
