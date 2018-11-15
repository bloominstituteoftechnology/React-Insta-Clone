import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostSection from './components/PostSection/PostSection';
import SearchBar from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostSection data = {this.state.data}/>
      </div>
    );
  }
}

export default App;
