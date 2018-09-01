import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostList from './components/PostContainer/PostList'

console.log(dummyData);

class App extends Component {
  render() {
    return (
      <div>
        <PostList dataList={dummyData} />
      </div>
    );
  }
}

export default App;



