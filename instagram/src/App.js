import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer';

class App extends Component {
  constructor(){
    super();
    this.state = {data: dummyData};
  }

  render() {
    return (
      <div className="App">
      {this.state.data.map(item =>  <PostContainer data={item} key={item.timestamp}/>)}
      </div>
    );
  }
}

export default App;