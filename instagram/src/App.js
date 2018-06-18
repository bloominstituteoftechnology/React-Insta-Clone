import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          {dummyData.map(item => (
            <PostContainer key={item.id} object={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
