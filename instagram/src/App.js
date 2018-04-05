import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: []
    }
  }

  componentDidMount = () => {
    this.setState({ post: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer dataProp={this.state.post} />
      </div>
    );
  }
}

export default App;
