import React, { Component } from 'react';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        {this.state.users.map(user => <PostContainer key={user.username} user={user}/>)}
      </div>
    );
  }
}

export default App;
