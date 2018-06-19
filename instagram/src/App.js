import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    }
  }

  componentDidMount() {
    this.setState({postData: dummyData})
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="posts-wrapper">
          {this.state.postData.map(post => <PostContainer post={post} />)}
        </div>
      </div>
    );
  }
}

export default App;
