import React, { Component } from 'react';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.setState({users: dummyData});
  }
  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <div className="container">
          {this.state.users.map(user => <PostContainer key={user.username} user={user}/>)}
        </div>
      </div>
    );
  }
}

export default App;
