import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import Body from './components/Body';
import Header from './components/Header';




class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: dummyData
    };
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Body posts={this.state.posts} />
      </div>
    );
  }
}





export default App;
