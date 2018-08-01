import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/Posts/PostContainer';
import SearchBar from './components/SearchBar';
// import SearchBar from './components/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }
  render() {
    return (
      <div className="App">
        <SearchBar data={this.state.data} />
        <PostContainer posts={this.state.data} />
      </div>
    );
  }
}

export default App;
