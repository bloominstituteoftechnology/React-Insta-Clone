import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // taking people, from people.js
    // calling setState to add people to our friends array.
    // ANY type of data fetching, SHOULD exist inside of CDM
    this.setState({ users: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="post-wrapper">
          <PostContainer users ={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
