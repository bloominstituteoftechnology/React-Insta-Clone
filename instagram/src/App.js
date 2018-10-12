import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainter';
import dummyData from './components/dummy-data.js';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props){
    super(props);
    this.state = dummyData;
  }

  

  render() {
    return (
      <div key={this.state.username}>
        <SearchBar />
       
        {this.state.map(post =>  <div key={post.username}> <PostContainer  post={post}/> </div>)}

      </div>
    );
  }
}



export default App;
