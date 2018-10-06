import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: dummyData });
    }, 500)
  }

  render() {

    return (
      <div className="App">
        <SearchBar />
        <PostContainer dummyData={this.state.data} />
      </div >
    );
  }
}

export default App;
