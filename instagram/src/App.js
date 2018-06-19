import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instagramData: []
    }
  }

  componentDidMount() {
    this.setState({instagramData: dummyData});
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        <PostContainer instagramData={this.state.instagramData} />
      </div>
    );
  }
}

export default App;
