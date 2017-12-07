import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchbar/searchbar';
import PostContainer from './components/postcontainer/postcontainer';
import dummyData from './dummy-data.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        {dummyData.map((item, i) => <PostContainer key={i} data={item}/>)}
      </div>
    );
  }
}

export default App;
