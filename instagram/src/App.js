import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  constructor(){
    super();
    this.state = {dummy: []}
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({dummy: dummyData})
    }, 2000)
  }

  render() {
    return (
      <div className="App">
      <SearchBar />
      {this.state.dummy.length === 0 ? (
        <h1>Loading</h1>
      ):(
        this.state.dummy.map(post => {
          return <PostContainer post={post} key={post.timestamp}/>
        }))}
      </div>
    );
  }
}

export default App;
