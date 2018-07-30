import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';

import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       {dummyData.map((e)=><PostContainer data={e} key={e.username}/>)}
      </div>
    );
  }
}

export default App;
