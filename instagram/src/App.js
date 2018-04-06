import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import './components/SearchBar/SearchBar.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import './components/PostContainer/PostContainer.css'
import CommentSection from './components/CommentSection/CommentSection.js';
import './components/CommentSection/CommentSection.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount () {
    this.setState({dummyData});
  }
  render() {
    return (
      <div className='header'>
         <SearchBar />
         <div className='body'>
        <PostContainer {...this.state} />
        </div>
        </div>
    );
  }
}

export default App;

