import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import { dummyData } from './dummy-data';

class App extends Component {
  render() {
    return (
      <div>
        <header>
        <SearchBar />
        </header>
       
        <div>{dummyData.map((item, i) => <PostContainer key={i} item={item} />)}</div>

      </div>
    );
  }
}

export default App;
