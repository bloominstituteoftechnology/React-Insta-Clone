import React, { Component } from 'react';
import PostContent from './components/PostContent';
import SearchBar from './components/SearchBar';
import CommentSection from './components/CommentSection';
import dummyData from '/components/dummy-data.js';
import './App.css';

class App extends Component {
 constructor() {
   super();
    this.state = {
      dummyData: dummyData
    };
 }




  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      <div className='instaContainer'>
        <div className='searchBar'>
          <SearchBar />
      <div> {this.state.dummyData.map(item => <PostContent item={item} comments ={item.comments} username={it} />)} </div>
        </div>
        <div className='PostContent'>
          <PostContent />
          <CommentSection />
        </div>
      </div>
    </div>

    );
  }
}

export default App;
