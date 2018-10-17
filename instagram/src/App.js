import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    console.log('Constructor Invoked!');
    super();
    this.state = { 
      instaData : [] 
    }
  }

  componentDidMount() {
    console.log('Component Did Mount Invoked!');
    this.setState({ instaData: dummyData });
  }

  render() {
    console.log('Render Invoked!');
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.instaData} />
      </div>
    );
  }
}

export default App;                                               
