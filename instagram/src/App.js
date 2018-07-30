import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainter'

class App extends Component {
  constructor(){
    super()
    this.state = {
      instaPosts: dummyData
    }
  }
  render() {
    return (
      <div className="App">
      <div>
        <h1 className="App-title">Henlo</h1>
        <PostContainer instaPost={this.state.instaPosts}/>
        </div>
      </div>
    );
  }
}

export default App;
