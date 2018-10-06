import React, { Component } from 'react';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }

  render() {
    return (
      <>
      <div className = 'App'></div>
        <SearchBar />
        <PostContainer posts={this.state.data}/>
      <div/>
      </>
      
    );
  }
}

export default App;
