import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js'
import { PostContainer } from './components/PostContainer/PostContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
       DummyData: [],
     }
  };
  
  componentDidMount(){
    this.setState({DummyData: dummyData});
  }

  render() {
    return (
      <div className="App">
      <PostContainer post={this.state.DummyData} />
      </div>
    );
  }
}

export default App;
