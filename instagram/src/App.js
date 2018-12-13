import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCompass, faUser, faComment } from '@fortawesome/free-solid-svg-icons';

import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

import './App.css';

library.add(faInstagram, faCompass, faHeart, faUser, faComment);

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.buildUsers(dummyData);
  }

  buildUsers = (data) => {
    this.setState({users: data});
  }

  heartClickHandler = (event, timeStamp) => {
    let userIndex = 0;
    for(let i=0; i<this.state.users.length; i++) {
      if (this.state.users[i].timestamp === timeStamp) {
        userIndex = i;
      }
    }
    this.setState(
      prevState => {
        const users = prevState.users.slice();
        users[userIndex].likes ++;
        return {users: users};
      }
    );
  }

  render() {
    return (
      <div className="App">
        <SearchBar />  
        <PostContainer users={this.state.users} hearClick={this.heartClickHandler}/>      
      </div>
    );
  }
}

export default App;
