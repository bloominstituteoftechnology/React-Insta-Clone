import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data'

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    return (
      <>
        <SearchBar />
        <div className="posts">
          <PostContainer data={this.state.data} />
        </div>
      </>
    );
  }
}

export default App;