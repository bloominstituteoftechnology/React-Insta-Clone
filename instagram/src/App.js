import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';
import CommentSection from './components/PostContainer/postContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="header_left">
            <img className="instaLogo" src="https://image.flaticon.com/icons/svg/87/87390.svg"/>
            <h3 className="instaTitle">Instagram</h3>
          </div>

          <SearchBar />

          <div className="header_right">

          </div>
        </div>
        <PostContainer />
      </div>
    );
  }
}

export default App;
