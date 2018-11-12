import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
class App extends Component {

  constructor(){
    super();
    this.state= {
      search:'',
      post:dummyData,
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        {this.state.post.map( post => <PostContainer key={post.timestamp} post ={post}/>)}
      </div>
    );
  }
}

export default App;
