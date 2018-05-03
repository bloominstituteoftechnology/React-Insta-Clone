import React, { Component } from 'react';
import dummyData from './dummy-data';
import logo from './logo.svg';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer'




class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // taking people, from people.js
    // calling setState to add people to our friends array.
    // ANY type of data fetching, SHOULD exist inside of CDM
    this.setState({ users: dummyData });
  }

  postTraitor(){
    for(let i =0; i < this.state.users.length; i++){
      
    }
  }

  render() {
    let x = [];
    for(let i =0; i < dummyData.length; i++){
      x.push(<PostContainer key={i} boo={dummyData[i]} />)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {/* {dummyData.map( (x, i) => <PostContainer key={i} boo={x} />)} */}
          {x}
        </div>

      </div>
    );
  }
}

export default App;
