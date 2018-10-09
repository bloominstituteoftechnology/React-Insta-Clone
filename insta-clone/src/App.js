import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js'
import dummyData from './dummy-data'
import './App.css';

class App extends Component {
  constructor() {
    console.log("constructor invoked")
    super()
    this.state = {
      postData: dummyData,

    }
  }
  componentDidMount() {
    console.log("CDM invoked")

  }
  render() {
    console.log("render invoked")
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar />
        </header>
        <section >
          <PostContainer post={this.state.postData} />
        </section>



      </div>
    );
  }
}

export default App;
