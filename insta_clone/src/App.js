import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  static defaultProps = {
    post: []
  };

  state = {
    post: dummyData
  };
  render() {
    return (
      <div className="App">
        <Header />
        <PostContainer posts={this.state.post} />
      </div>
    );
  }
}

export default App;
