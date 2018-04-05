import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
// will pass to post container

class App extends Component {
    constructor() {
      super();
      this.state = {
        dummyData: [{}],
      };
    }

    componentDidMount() {
      console.log(dummyData);
      this.setState({ dummyData: dummyData.dummyData})
    }
  render() {
    return (
      <div className="App">
        <PostContainer dummyData= {this.state.dummyData}/>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Instagram</h1>
        </header>
        {/* s */}
      </div>
    );
  }
}

export default App;
