import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post';
import Search from './components/SearchBar/Search';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyData,
    }
  }
  render() {
    return (
      
      <div className="App">
        <Search/>
        <div className = "content-container">
          <Post dummyData ={this.state.dummyData}/>
        </div>
      </div>
    );
  }
}

export default App;
