import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
          <PostContainer />
      </div>
    );
  }
}

export default App;

// <div className='instagramIcon'></div>
// <div className='instagramTitle'></div>
//
// <div className='userIcons'></div>
