import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import { dummyData } from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      feed: [],
    }
  }

  componentDidMount(){
    this.setState({feed: dummyData});
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        {this.state.feed.map(element=> <PostContainer key={element.username} feed={element}/>)}
      </div>
    );
  }
}

export default App;
