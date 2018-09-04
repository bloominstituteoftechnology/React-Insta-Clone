import React, { Component } from 'react';
import logo from './logo.svg';

import dummyData from './dummy-data';
import Comment from './components/CommentSection/CommentList';
import PostContainer from './components/PostContainer/PostContainer';
import Search from './components/SearchBar/Search';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }
  render() {
    return (
      <div className="App"> 
        <Search />        
        {this.state.data.map((eachElement) => {
          return <PostContainer key={eachElement.username} profileObject={eachElement} />;
        })}           
      </div>
    );
  }
}

export default App;
