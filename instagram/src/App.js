import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostList from './components/PostContainer/PostList';
import './index.css';

console.log(dummyData);

class App extends Component {
  render() {
    return (
      <div className="container">
        <PostList dataList={dummyData} />
      </div>
    );
  }
}

export default App;



