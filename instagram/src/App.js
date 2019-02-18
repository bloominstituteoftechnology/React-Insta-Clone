import React, { Component } from 'react';
import './App.css';
import './DummyData/dummy-data';
import dummyData from './DummyData/dummy-data';
import PostContainer from './components/PostContainer/PostContatiner';

class App extends Component {
  constructor(){
    super();
    this.state={
      data : dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <PostContainer dataProps = {this.state.data} />
      </div>
    );
  }
}

export default App;
