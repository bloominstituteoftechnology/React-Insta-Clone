import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'
import CommentSection from './components/CommentSection'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dummyDataList: dummyData
    }
  }



  render() {
    return (
      <div className="App">
        <header className="search-bar">
          <SearchBar />
        </header>
        <p className="post-container">
          <PostContainer comments='dummyDataList'/>
        </p>
        <footer className='comment-section'>
        <CommentSection />
        </footer>
      </div>
    );
  }
}

export default App;
