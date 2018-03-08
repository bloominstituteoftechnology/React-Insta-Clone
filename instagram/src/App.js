import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js'

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
    console.log(this.state);
    console.log(this.state.username)
    return (
      <div className="App">
      {/* <PostContainer username={this.state.DummyData.username} */}
      </div>
    );
  }
}

export default App;
