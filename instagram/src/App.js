import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './assets/dummy-data';
import PostContainer from './components/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Instagram</h1>
        </header>
        {this.state.data.map((post, index)=>{
          return(
            <PostContainer post={post} key={index} />
        )})}
      </div>
    );
  }
}

export default App;
