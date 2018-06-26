import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        dummyData = dummyData.map((item) => {
          <PostContainer obj={item} />
        });
      </div>
    );
  }
}

export default App;
