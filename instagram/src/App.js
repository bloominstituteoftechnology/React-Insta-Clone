import React, { Component } from 'react';
import './App.css';
import dummyData  from './dummy-data.js';
import Authenticate from './Authentication/Authenticate';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData,
      users: [],
      searched: "",
      usernameInput: ""
    };
  }

  handleNewSearch = (event) => {
    this.setState({searched: event.target.value});
  }

  onSearch = (event) => {
    event.preventDefault();
    const searchedUser = this.state.searched;
    const users = this.state.data.slice();
    const searchedUserResult = users.filter(user => user.username === searchedUser);

    if (searchedUserResult.length > 0) {
      this.setState({
        data: searchedUserResult,
        searched: ""
      })
    } else {
      alert ("No user by that name. Please try again.");
      this.setState({data: dummyData})
    }
  }

  handleNewLogin = (event) => {
    this.setState({usernameInput: event.target.value});
    
  }
  onLogin = (event) => {
    localStorage.setItem('user', this.state.usernameInput);
    window.location.reload();
  }

  onSignout = (event) => {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <Authenticate 
          handleNewLogin={this.handleNewLogin} 
          onLogin={this.onLogin} 
          data={this.state.data} 
          users={this.state.users} 
          searched={this.state.searched} 
          onSearch={this.onSearch} 
          handleNewSearch={this.handleNewSearch} 
          onSignout={this.onSignout}
        />
      </div>
    )
  }
}

export default App;
