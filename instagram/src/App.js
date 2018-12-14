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

  updateUsers = (users) => {
    this.setState({users: users});
  }

  render() {
    return (
      <div className="App">
        <SearchBar users={this.state.users} update={this.updateUsers} />  
        <PostContainer users={this.state.users} />      
      </div>
    );
  }
}

export default App;
