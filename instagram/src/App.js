import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './dummy-data';




class App extends Component {
  constructor() {
    super();
    this.state = {
      posts : dummyData,
    };

  } //constructor ends

  render() {
    return (
      <div className="App">
        <header>
            <SearchBar />
        </header>

        <div>         
          <PostContainer props = {this.state.posts}/>
        </div>

        <div>         
          <CommentSection />
        </div>
      </div>
    ); //return end
  } //render() end
} //App class component end.

export default App;
